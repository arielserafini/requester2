import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static defaultProps = {
    count: 100
  }

  state = {
    count: this.props.count,
    text: this.props.text
  }

  static propTypes = {
    count: React.PropTypes.number.isRequired
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.name}</h2>
        </div>
        <p className="App-intro">{this.state.text}</p>
        <div> {this.state.count} </div>
        <button onClick={this.increment.bind(this)}>Count++</button>
        <div> <input value={this.state.text} onChange={this.updateText.bind(this)}/> </div>
      </div>
    );
  }
}

export default App;
