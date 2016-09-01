import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static defaultProps = {
    count: 100
  }

  state = {
    count: this.props.count
  }

  static propTypes = {
    count: React.PropTypes.number.isRequired
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.name} aa</h2>
        </div>
        <p className="App-intro">{this.props.text}</p>
        <div> {this.state.count} </div>
        <button onClick={this.increment.bind(this)}>Count++</button>
      </div>
    );
  }
}

export default App;
