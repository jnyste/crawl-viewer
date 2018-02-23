import React, { Component } from 'react';
import CharacterSelect from './components/Compo.js';
import {Grid, Jumbotron, Button} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.png" className="App-logo" alt="logo" />
          <CharacterSelect />
        </header>
        <Grid>
        <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button bsStyle="primary">Learn more</Button>
        </p>
      </Jumbotron>;
        </Grid>
      </div>
    );
  }
}

export default App;
