import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import prepareStore from './App.Store';
import AppContainer from './App.Container';

class App extends Component {
  render() {
    const store = prepareStore();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AppContainer store = { store } />
      </div>
    );
  }
}

export default App;
