export const setTodo = (todo) => ({
  type: 'SET_TODO', payload: todo,
});

export const addTodo = (task) => ({
  type: 'ADD_TODO', task,
});

export const deleteTodo = (todoId) => ({
  type: 'DELETE_TODO', payload: todoId,
});

export const toggleTodo = (todoId) => ({
  type: 'TOGGLE_TODO', payload: todoId,
});

export const setIsEditing = (isEditing) => ({
  type: 'SET_IS_EDITING', isEditing,
});

export const setTaskId = (taskId) => ({
  type: 'SET_TASK_ID', taskId,
});

export const editTodo = (task) => ({
  type: 'EDIT_TODO', task,
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER', payload: filter,
});

export const setSearchTerm = (searchTerm) => ({
  type: 'SET_SEARCH_TERM', searchTerm,
});
