import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Post a note!</h1>
        </header>
        <br></br>
        <Todos/>
      </div>
    );
  }
}

export default App;
