import React from 'react';

const Todos = (props) => {
  console.log(props);
  let todos = props.todos.map(todo =>
    <div key={todo.id} className='single-todo'>
      <h3>Date: {todo.date}</h3>
      <h3>Todo: {todo.todo}</h3>
    </div>
  )

  return (
    <div className='todo-list'>
      {todos}
    </div>
  )
}

export default Todos;
