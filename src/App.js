import React, { Component } from 'react';
import './App.css';
import Todo from './Components/Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Derick's Trello clone in progress!
          </h1>
        </header>
        <hr/>
        <Todo/>
      </div>
    );
  }
}

export default App;
