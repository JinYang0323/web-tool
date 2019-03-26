import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lock from './Lock.js';

class App extends Component {
  render() {
    return (
      <div className='combo-lock'>
        <Lock />
      </div>
    );
  }
}

export default App;
