const express = require("express");
const app = express();
const PORT = 3000;

const chat = require("./chat");
const chatWeb = require("./chat-web");
const loginWeb = require("./login-web");

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.send(loginWeb.loginPage(chat));
});

app.get("/chat", (req, res) => {
  res.send(chatWeb.chatPage(chat));
});

app.post("/login", express.urlencoded({ extended: false }), (req, res) => {
  const currentUser = req.body.username;
  chat.addUser(currentUser);
  res.redirect("/chat");
});

app.post("/logout", express.urlencoded({ extended: false }), (req, res) => {
  const current = req.body.user;
  chat.deleteUser(current);
  res.redirect("/");
});

app.post("/", express.urlencoded({ extended: false }), (req, res) => {
  res.redirect("/chat");
});

app.post("/chat", express.urlencoded({ extended: false }), (req, res) => {
  const sender = req.body.sender;
  const text = req.body.text;
  chat.addMessage({ sender, text, timestamp: new Date() });
  res.redirect("/chat");
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
