const express = require("express");
const app = express();
const PORT = 3000;

const chat = require("./chat");
const chatWeb = require("./chat-web");
const loginWeb = require("./login-web");

app.use(express.static("./public"));

app.get("/", (req, res) => {
  if (chat.currentUser) {
    res.send(chatWeb.chatPage(chat));
    chat.currentUser = null;
  } else {
    res.send(loginWeb.loginPage(chat));
  }
});

app.post("/login", express.urlencoded({ extended: false }), (req, res) => {
  const currentUser = req.body.username;
  chat.addUser(currentUser);
  chat.currentUser = currentUser;
  res.redirect("/");
});

app.post("/logout", express.urlencoded({ extended: false }), (req, res) => {
  const current = req.body.user;
  chat.deleteUser(current);
  chat.currentUser = null;
  res.redirect("/");
});

app.post("/refresh", express.urlencoded({ extended: false }), (req, res) => {
  chat.currentUser = req.body.user;
  res.redirect("/");
});

app.post("/chat", express.urlencoded({ extended: false }), (req, res) => {
  const sender = req.body.sender;
  chat.currentUser = sender;
  const text = req.body.text;
  chat.addMessage({ sender, text, timestamp: new Date() });
  res.redirect("/");
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
