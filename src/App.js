import {Col, Grid, Jumbotron, Button, Navbar, Nav, NavItem} from 'react-bootstrap';
import React, { Component } from 'react';
import CharacterSelect from './components/Compo.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.png" className="App-logo"></img>
          <h4>Character Viewer</h4>
        </header>
        <CharacterSelect/>
      </div>
    );
  }
}

export default App;
