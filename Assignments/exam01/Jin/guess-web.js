const guessWeb = {
  guessPage: function(words) {
    return (
      `
        <!DOCTYPE html>
        <html>
          <head>
            <link rel="stylesheet" href="guess.css" />
            <title>Guess the word</title>
          </head>
          <body>
            <div class="top-panel">
              <div class="word-list">
                <p>Valid words:</p>
                <p class="valid-words">` +
      words.wordsList
        .map(
          word => `
                                <p class="valid-word">${word}</p>`
        )
        .join("") +
      `</p>
              </div>
              <div class="guess-count">
                <p>Accepted guess: ${
                  words.acceptedGuess[words.currentIndex]
                }</p>
              </div>
            </div>
        
            <div class="restart">
              <form action="/restart" method="POST">
                <button type="submit">Restart Game</button>
              </form>
            </div>

            <div class="guess-panel">
              <div class="input-panel">
                <p>Please enter a word:</p>
                <form class="input-panel" action="/input" method="POST">
                  <input name="word" class="word" />
                  <button type="submit">enter</button>
                </form>
              </div>
            </div>
        
            <div class="history">
              <p>Previously guessed words:</p>
              ` +
      words.guessedWordsList
        .map(
          guessedWord => `
                                <span class="valid-word">
                                  <p>${guessedWord.guessedWord}</p>
                                  <p>${guessedWord.correctLetters}</p>
                                </span>`
        )
        .join("") +
      `
            </div>

            <div class="message-panel">
              <p>${words.resultMessage[words.currentIndex]}</p>
            </div>
          </body>
        </html>        
        `
    );
  }
};

module.exports = guessWeb;
