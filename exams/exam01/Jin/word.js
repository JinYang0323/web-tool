const wordsList = ["TEA", "EAT", "TEE", "PEA", "PET", "APE"];
const guessedWordsList = [
  // { guessedWord: "ted", correctLetters: 2 }
];

const acceptedGuess = [];
const selectedWord = [];

const resultMessage = [];
let currentIndex = 0;

function initiate() {
  for (let i = 0; i < wordsList.length; i++) {
    wordsList[i] = wordsList[i].toUpperCase();
  }
  acceptedGuess.push(0);
  selectedWord.push(wordsList[Math.floor(Math.random() * wordsList.length)]);
  console.log("selectedWord: " + selectedWord[selectedWord.length - 1]);
  resultMessage.push("");
}

function addWord(word, index) {
  const uword = word.toUpperCase();

  if (!wordsList.includes(uword)) {
    resultMessage[index] = "The word is not one of the permitted words";
  } else if (uword === selectedWord[0]) {
    acceptedGuess[index]++;
    resultMessage[index] =
      "Congradulations! You have guessed the word in " +
      acceptedGuess[index] +
      " attempts! You can start a new game now!";
  } else {
    const letterCorrect = getLetters(uword, selectedWord[0]);
    guessedWordsList.push({ guessedWord: word, correctLetters: letterCorrect });
    acceptedGuess[0]++;
    resultMessage[0] = "You are almost there!";
  }
}

function clearAll(index) {
  while (guessedWordsList.length != 0) {
    guessedWordsList.pop();
  }
  acceptedGuess[index] = 0;
  resultMessage[index] = "";
  selectedWord[index] = wordsList[Math.floor(Math.random() * wordsList.length)];
  console.log("selectedWord: " + selectedWord[index]);
}

function getLetters(uword, selectedWord) {
  let result = 0;
  if (uword == undefined || selectedWord == undefined) {
    return result;
  }
  const tempArray = [];
  for (let i = 0; i < selectedWord.length; i++) {
    tempArray.push(selectedWord.charAt(i));
  }
  for (let i = 0; i < uword.length; i++) {
    if (tempArray.indexOf(uword.charAt(i)) >= 0) {
      tempArray.splice(tempArray.indexOf(uword.charAt(i)), 1);
      result++;
    }
  }
  return result;
}

const words = {
  initiate,
  currentIndex,
  wordsList,
  guessedWordsList,
  addWord,
  acceptedGuess,
  selectedWord,
  resultMessage,
  clearAll
};

module.exports = words;
