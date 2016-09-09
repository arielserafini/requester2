import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class RequestList extends Component {
  render() {
    let addRequestField = (item) => {
      return (
        <li key={item.id}>
          <RequestPreset uri={item.uri} method={item.method} name={item.name} clickHandler={() => this.props.clickHandler(item)}/>
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
      <button onClick={this.props.clickHandler}>{this.props.name}</button>
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
        <input value={this.state.uri} onChange={() => this.updateRequestURI()} />{this.state.uri}
      </div>
    );
  }
}

class PresetName extends Component {
  state = {
    preset: this.props.preset
  }


  updateRequestName(e) {
    let preset = this.state.preset;
    preset.name = e.target.value;
    this.setState({
      preset: preset
    });
  }

  render() {
    return (
      <div>Preset name: <input value={this.state.preset.name} onChange={(e)=>{this.updateRequestName(e)}}/></div>
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
    activePreset: undefined
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
    this.setState({
      activePreset: preset
    });
  }

  updateRequest(e) {
    console.log(e);
  }

  render() {
    let presetName = <div>No active preset.</div>;
    if (this.state.activePreset) {
      presetName = <PresetName preset={this.state.activePreset} onChange={(e)=>this.updateRequest(e)}/>;
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.APP_NAME}</h2>
        </div>
        <URIField methods={this.state.HTTP_METHODS} />
        <button onClick={() => this.addRequest()}>Add request</button>
        <br />
        {presetName}
        <RequestList requests={this.state.requests} clickHandler={(preset) => this.setActivePreset(preset)} />
      </div>
    );
  }
}

export default App;
