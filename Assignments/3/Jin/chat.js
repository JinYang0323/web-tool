const users = [];

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

const messages = [
  {
    sender: "Amit",
    timestamp: new Date("2019-01-01 19:20:00"),
    text: "You up?"
  },
  {
    sender: "Bao",
    timestamp: new Date("2019-01-01 19:21:00"),
    text:
      "Yeah, still working on this INFO6250 work, but I keep getting distracted by cat videos"
  }
];

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
