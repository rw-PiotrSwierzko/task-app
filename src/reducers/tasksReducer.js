const tasksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    case 'DELETE_TASK': {
      return {
        ...state,
        tasks: [...state.tasks.filter(task => task.id !== action.payload)],
      };
    }
    case 'EDIT_TASK': {
      const tasks = [...state.tasks];
      const task = tasks.find(t => t.id === action.task.id);
      task.text = action.task.text;
      return {
        ...state,
        tasks,
      };
    }
    case 'TOGGLE_TASK': {
      const tasks = [...state.tasks];
      const task = tasks.find(t => t.id === action.payload);
      task.completed = !task.completed;
      return {
        ...state,
        tasks,
      };
    }
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};

export { tasksReducer };
