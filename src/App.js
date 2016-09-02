import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class RequestList extends Component {
    render() {
        let addRequestField = (item) => {
            return (
                <RequestField key={item.id} uri={item.uri}/>
            );
        }
        return (
            <div>
                {this.props.requests.map(addRequestField)}
            </div>
        );
    }
}

class RequestField extends Component {

    state = {
        uri: this.props.uri
    }

    updateRequestURI(e){
        this.setState({
            uri: e.target.value
        });
    }

    render() {
        return (
            <div><input value={this.state.uri} onChange={this.updateRequestURI.bind(this)} />{this.state.uri}</div>
        );
    }
}

class App extends Component {
  state = {
    APP_NAME: 'requester',
    requests: []
  }

  addRequest() {
    let requests = this.state.requests.concat([{uri: '', id: Date.now()}]);

    this.setState({
        requests: requests
    });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.APP_NAME}</h2>
          <button onClick={this.addRequest.bind(this)}>Add request</button>
          <RequestList requests={this.state.requests} />
        </div>

      </div>
    );
  }
}

export default App;
