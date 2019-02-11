const express = require("express");
const app = express();

const PORT = 3000;

const words = require("./word");
const guessWeb = require("./guess-web");

app.use(express.static("./public"));

app.get("/", (req, res) => {
  if (words.selectedWord.length == 0) {
    words.initiate();
  }
  res.send(guessWeb.guessPage(words));
});

app.post("/input", express.urlencoded({ extended: false }), (req, res) => {
  const inputWord = req.body.word;
  words.addWord(inputWord, words.currentIndex);
  res.redirect("/");
});

app.post("/restart", express.urlencoded({ extended: false }), (req, res) => {
  words.clearAll(words.currentIndex);
  res.redirect("/");
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
