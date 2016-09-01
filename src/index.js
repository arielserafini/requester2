import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App name="a" text="this is some text" />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
