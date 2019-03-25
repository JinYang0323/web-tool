const users = {};
const messages = [];

function addUser({ username }) {
  users[username] = username;
}

function deleteUser({ username }) {
  delete users[username];
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
