import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ' ',
      count: 0,
    };
  }
  handleChange = (e) => {
    this.setState({
      count: e.target.value.length,
      name: e.target.value,
    });
  };
  render() {
    return (
      <div className="container">
        <textarea
          rows="3"
          value={this.state.name}
          onChange={this.handleChange}
        ></textarea>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  }
}

export default App;
