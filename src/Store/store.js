import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

let initialState = {todos:[]}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'GET_TODOS':
      return {...state, todos: action.payload}
    default:
      return state
  }
}

componentDidMount() {
  fetch('http://localhost:3001/todos', {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accepts": "application/json"
    },
    body: JSON.stringify({
      "date": this.state.date,
      "todo": this.state.todo
    })
  })
  .then(res => res.json())
  .then(todos => this.setState({todos: todos}) )
}

const store = createStore(reducer, applyMiddleware(logger, thunk))
export default store;
