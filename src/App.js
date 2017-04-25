import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 1
    };
  }
  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div className="counter">
        <h1>{this.state.count}</h1>
        <button type="button" onClick={() => this.incrementCount()}>Increment</button>
      </div>
    );
  }
}

App.defaultProps = {
  name: 'PlaceholderName'
}

export default App;
