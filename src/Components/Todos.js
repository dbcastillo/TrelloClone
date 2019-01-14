import React from 'react';
import {connect} from 'react-redux'
import {gettingAllTodos} from '../Store/thunk'

const Todos = (props) => {
  let todos = props.todos.map(todo =>
    <div key={todo.id} className='single-todo'>
      <h3><span className='bold blue'>Date:</span> {todo.date}</h3>
      <h3><span className= 'bold blue'>Todo:</span> {todo.todo}</h3>
    </div>
  )

  return (
    <div className='todo-list'>
      {todos}
    </div>
  )
}

const MapStateToProps = (state) => {
      return {
        todos: state.todos
      }
    }

const MapDispatchToProps = (dispatch) => {
  return {
    getAllTodos: gettingAllTodos(dispatch)
  }
}
export default connect(MapStateToProps,MapDispatchToProps)(Todos)
