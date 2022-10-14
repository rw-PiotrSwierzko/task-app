export default function tasksReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'DELETE_TODO': {
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.id !== action.payload)],
      };
    }
    case 'EDIT_TODO': {
      const todos = [...state.todos];
      const todo = todos.find(t => t.id === action.payload.id);
      todo.text = action.payload.text;
      return {
        ...state,
        todos,
      };
    }
    case 'TOGGLE_TODO': {
      const todos = [...state.todos];
      const todo = todos.find(t => t.id === action.payload);
      todo.completed = !todo.completed;
      return {
        ...state,
        todos,
      };
    }
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'SET_TODO':
      return {
        ...state,
        todo: action.payload,
      };
    case 'SET_EDIT_MODE':
      return {
        ...state,
        editMode: action.payload,
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
}
