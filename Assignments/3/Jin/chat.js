const users = [];
const messages = [];

let currentUser = "";

function addUser(userName) {
  if (users.indexOf(userName) == -1) {
    users.push(userName);
  }
}

function deleteUser(userName) {
  if (users.indexOf(userName) != -1) {
    users.splice(users.indexOf(userName), 1);
  }
}

function addMessage({ sender, timestamp, text }) {
  messages.push({ sender, timestamp, text });
}

const chat = {
  users,
  messages,
  addUser,
  deleteUser,
  addMessage
};

module.exports = chat;
