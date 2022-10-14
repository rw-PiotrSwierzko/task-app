const tasksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.task],
      };
    case 'DELETE_TODO': {
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.id !== action.payload)],
      };
    }
    case 'EDIT_TODO': {
      const todos = [...state.todos];
      const todo = todos.find(t => t.id === action.task.id);
      todo.text = action.task.text;
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
    default:
      return state;
  }
};

export { tasksReducer };
