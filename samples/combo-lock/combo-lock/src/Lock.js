import React, { Component } from 'react';
import LockButton from './LockButton.js';

class Lock extends Component {
  constructor() {
    super();
    this.state = {
      locked: 'Locked',
      answer: ['1', '2', '3', '4'],
      series: []
    };
    this.record = this.record.bind(this);
    this.reset = this.reset.bind(this);
  }
  isCorrect() {
    return this.state.series.join('') === this.state.answer.join('');
  }
  record(number) {
    if (this.state.series.length < this.state.answer.length) {
      this.setState({ series: [...this.state.series, number] }, () => {
        if (this.isCorrect()) {
          this.setState({ series: [], locked: 'UnLocked' });
        }
      });
      console.log(this.state.series);
    }
  }
  reset() {
    this.setState({ series: [] });
  }
  render() {
    return (
      <div className='combo-lock'>
        <div className='lock'>{this.state.locked}</div>
        <div className='series'>{this.state.series.join(' ')}</div>
        <div className='lock-row'>
          <LockButton className='other' number='1' onClick={this.record} />
          <LockButton number='2' onClick={this.record} />
          <LockButton number='3' onClick={this.record} />
        </div>
        <div className='lock-row'>
          <LockButton number='4' onClick={this.record} />
          <LockButton number='5' onClick={this.record} />
          <LockButton number='6' onClick={this.record} />
        </div>
        <div className='lock-row'>
          <LockButton number='7' onClick={this.record} />
          <LockButton number='8' onClick={this.record} />
          <LockButton number='9' onClick={this.record} />
        </div>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Lock;
