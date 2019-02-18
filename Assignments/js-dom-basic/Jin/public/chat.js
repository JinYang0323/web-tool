"use strict";

const selectedUsers = {};

(function IIFE() {
  const loginButton = document.querySelector(".login button");
  const username = document.querySelector(".login .username");
  setDisability(loginButton, username);
  const sendButton = document.querySelector(".send button");
  const toSend = document.querySelector(".to-send");
  setDisability(sendButton, toSend);

  initializeSelectedUsers();
  const userText = document.querySelectorAll(".user .username");
  const userArray = Array.from(userText);
  for (let user of userArray) {
    user.addEventListener("click", e => {
      changeColor(user);
      changeButtonVisibility();
      filterMessage();
    });
  }
  const refreshButton = document.querySelector(".refresh button");
  sendStateWhenRefresh(refreshButton);
  sendStateWhenRefresh(sendButton);
})();

function initializeSelectedUsers() {
  console.log(window.name);
  Object.keys(selectedUsers).forEach(function(key) {
    delete selectedUsers[key];
  });
  for (let username of window.name.split("+")) {
    if (username) {
      selectedUsers[username] = username;
      console.log(username);
    }
  }
  changeButtonVisibility();
  filterMessage();
}

function setDisability(button, field) {
  if (field && button) {
    button.disabled = !field.value;
    field.addEventListener("input", e => {
      if (e.target.value) {
        button.disabled = false;
      } else {
        button.disabled = true;
        button.setAttribute("style", "color:grey");
      }
    });
  }
}

function changeColor(user) {
  const username = user.innerHTML;
  if (selectedUsers[username] === undefined) {
    selectedUsers[username] = username;
    user.setAttribute("style", "color:red;");
  } else {
    delete selectedUsers[username];
    user.setAttribute("style", "color:black;");
  }
}
function changeButtonVisibility() {
  const unselectedAllButton = document.querySelector(".unselectAll button");
  if (unselectedAllButton && Object.keys(selectedUsers).length === 0) {
    unselectedAllButton.setAttribute("style", "visibility:hidden");
  } else {
    unselectedAllButton.setAttribute("style", "visibility:visible");
  }
  unselectedAllButton.addEventListener("click", e => {
    Object.keys(selectedUsers).forEach(function(key) {
      delete selectedUsers[key];
    });
  });
}

function filterMessage() {
  const messageList = document.querySelectorAll(".message");
  const messageArray = Array.from(messageList);
  let isPreviousHidden = false;
  deleteAllIndicator();
  for (let message of messageArray) {
    const username = message.querySelector(".username").innerHTML;
    if (
      Object.keys(selectedUsers).length !== 0 &&
      selectedUsers[username] === undefined
    ) {
      if (!isPreviousHidden) addIndicator(message);
      message.setAttribute("style", "visibility:hidden; display:none");
      isPreviousHidden = true;
    } else {
      message.setAttribute("style", "visibility:visible");
      isPreviousHidden = false;
    }
  }
}

function addIndicator(currentNode) {
  const indicatorNode = document.createElement("p");
  indicatorNode.setAttribute("align", "center");
  indicatorNode.classList.add("indicator");
  indicatorNode.innerText = "This is indicator that there are message hidden";
  currentNode.parentNode.insertBefore(indicatorNode, currentNode);
}

function deleteAllIndicator() {
  const indicatorNode = document.getElementsByClassName("indicator");
  for (let indicator of indicatorNode) {
    indicator.setAttribute("style", "display:none");
  }
}

function sendStateWhenRefresh(button) {
  button.addEventListener("click", e => {
    let selectedUsersString = "";
    for (let username of Object.keys(selectedUsers)) {
      if (username) {
        selectedUsersString = selectedUsersString + "+" + username;
      }
    }
    window.name = selectedUsersString;
  });
}
