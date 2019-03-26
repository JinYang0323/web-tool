const users = {};

const messages = [
  { sender: "s", timestamp: "2019 whatever", text: "lalala" },
  { sender: "d", timestamp: "2018 whatever", text: "heiheihei" },
  { sender: "s", timestamp: "2019 whatever", text: "gagaga" },
  { sender: "s", timestamp: "2019 whatever", text: "gagaga" },
  { sender: "d", timestamp: "2018 whatever", text: "lueluelue" }
];

function addMessage({ sender, timestamp, text }) {
  messages.push({ sender, timestamp, text });
}

function addUser({ username }) {
  users[username] = username;
}

function removeUser({ username }) {
  delete users[username];
}

const chat = {
  users,
  messages,
  addMessage,
  addUser,
  removeUser
};

module.exports = chat;
