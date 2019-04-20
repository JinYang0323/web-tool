const game = {};
game.games = { 1: 'EAT' };
game.id = 0;
game.nextId = () => {
  game.is += 1;
  return game.id;
};
game.validWords = ['EAT', 'TEA', 'ANT'];
game.pickWord = wordList => {
  return wordList[Math.floor(Math.random() * wordList.length)];
};

game.startNew = () => {
  const id = game.nextId();
  game.game[id] = game.pickWord(game.validWords);
  return id;
};

game.getValidWords = () => {
  return game.validWords;
};

game.guess = ({ id, guess }) => {
  console.log({ id, guess });
  return common(guess.toUpperCase(), game.games[id]);
};

module.exports = game;
