import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Create-React-App Rewired</h2>
        </div>
        <div className="header-text">
          <h3>Header Intro</h3>
          <p className="App-intro">
            This is header-text simply to demonstrate the app. To get started customizing this template, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
