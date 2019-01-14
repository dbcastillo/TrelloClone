const gotTodos = (payload) => {
  return {
    type: 'GET_TODOS',
    payload: payload
    //payload is result after fetch request
  }
}

export const gettingAllTodos = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/todos')
    .then(res => res.json())
    .then(AllTodos =>
      dispatch(gotTodos(AllTodos))
    )
  }
}
