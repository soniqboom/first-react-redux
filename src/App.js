import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './components/itemList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React-Redux Cat</h1>
        </header>
        <ItemList />
      </div>
    );
  }
}

export default App;

