import React, { Component } from 'react';
import './App.css';
// import { validWords } from '../server/game';
// import { startGame, validWords } from './services';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     game: null,
  //     guesses: [],
  //     valid: []
  //   };

  //   this.startGame = this.startGame.bind(this);
  // }

  // startGame() {
  //   startGame().then(id => {
  //     this.setState({ game: id });
  //   });
  //   validWords().then(words => {
  //     this.setState({ valid: words });
  //   });
  // }
  render() {
    //Disable guessing if ther is no current game
    //when start new is clicked, call the services to populate the valid words and start a new game(record the id)
    return (
      <div className='App'>
        <div id='maze'>
          <canvas id='canvasTable' />
        </div>
      </div>
    );
  }
}

export default App;
