"use strict";
(function IIFE() {
  const sendButton = document.querySelector(".send button");
  const toSend = document.querySelector(".to-send");
  if (toSend && sendButton) {
    sendButton.disabled = !toSend.value;
    toSend.addEventListener("input", e => {
      if (e.target.value) {
        sendButton.disabled = false;
      } else {
        sendButton.disabled = true;
        sendButton.setAttribute("style", "color:grey");
      }
    });
  }
})();

const selectedUsers = {};

(function IIFE() {
  const userText = document.querySelectorAll(".user .username");
  const userArray = Array.from(userText);
  for (let user of userArray) {
    user.addEventListener("click", e => {
      const username = user.innerHTML;
      if (selectedUsers[username] === undefined) {
        selectedUsers[username] = username;
        user.setAttribute("style", "color:red;");
      } else {
        delete selectedUsers[username];
        user.setAttribute("style", "color:black;");
      }
      changeButtonVisibility();
      filterMessage();
    });
  }
})();

function changeButtonVisibility() {
  const unselectedAllButton = document.querySelector(".unselectAll button");
  if (unselectedAllButton && Object.keys(selectedUsers).length === 0) {
    unselectedAllButton.setAttribute("style", "visibility:hidden");
  } else {
    unselectedAllButton.setAttribute("style", "visibility:visible");
  }
  unselectedAllButton.addEventListener("click", e => {
    selectedUsers = {};
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
