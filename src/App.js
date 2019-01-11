import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/todos')
    .then(res => res.json())
    .then(todos =>
      this.setState({todos: todos})
    )
  }

  showTodos = () => {
    return this.state.todos
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Post it Note Tracker</h1>
        </header>
        <br></br>
        <Todos todos={this.showTodos()}/>
      </div>
    );
  }
}

export default App;
