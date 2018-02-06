const initialState = {
  todos: []
}

const SET_TODOS = 'SET_TODOS';

export function setTodos(todos) {
  return {
    type: SET_TODOS,
    payload: todos
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TODOS:
      return Object.assign({}, state, { todos: action.payload });
    default:
      return state;
  }
}