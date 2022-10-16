const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_IS_EDITING':
      return {
        ...state,
        isEditing: action.isEditing,
      };
    case 'SET_TASK_ID':
      return {
        ...state,
        taskId: action.taskId,
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    default:
      return state;
  }
};

export {
  appReducer,
};
