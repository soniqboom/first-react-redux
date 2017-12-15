import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './components/itemList';
import ItemModal from './components/itemModal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpened: false
    }

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    let modalOpened = !this.state.modalOpened;
    this.setState({...this.state, modalOpened});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React-Redux Cat</h1>
        </header>
        <ItemList />
        <ItemModal isVisible={this.state.modalOpened}/>
        <button type="button" onClick={this.toggleModal}>Toggle modal</button>
      </div>
    );
  }
}

export default App;

