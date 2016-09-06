import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class RequestList extends Component {
  render() {
    let addRequestField = (item) => {
      return (
        <li>
          <RequestPreset key={item.id} uri={item.uri} method={item.method} name={item.name} onClick={setActivePreset(item)}/>
        </li>
      );
    }
    return (
      <ul>
        {this.props.requests.map(addRequestField)}
      </ul>
    );
  }
}

class RequestPreset extends Component {
  render() {
    return (
      <a>{this.props.name}</a>
    );
  }
};

class URIField extends Component {

  state = {
    uri: this.props.uri,
    method: this.props.method
  }

  updateRequestURI(e){
    this.setState({
      uri: e.target.value
    });
  }

  render() {
    let addMethodOption = (item) => {
      return (
        <option value={item} key={item}>{item}</option>
      );
    };

    return (
      <div>
        <select>
          {this.props.methods.map(addMethodOption)}
        </select>
        <input value={this.state.uri} onChange={this.updateRequestURI.bind(this)} />{this.state.uri}
      </div>
    );
  }
}

class App extends Component {
  state = {
    APP_NAME: 'requester',
    HTTP_METHODS: [
      'GET', 'POST'
    ],
    requests: [],
  }

  addRequest() {
    let requests = this.state.requests.concat([{
      uri: '', 
      id: Date.now(),
      name: 'New Request'
    }]);

    this.setState({
      requests: requests
    });
  }

  setActivePreset(preset) {
    console.log(preset);
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.APP_NAME}</h2>
        </div>
        <URIField methods={this.state.HTTP_METHODS} />
        <button onClick={this.addRequest.bind(this)}>Add request</button>
        <RequestList requests={this.state.requests} />
      </div>
    );
  }
}

export default App;
