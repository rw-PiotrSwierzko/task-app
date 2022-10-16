export const setTask = (task) => ({
  type: 'SET_TASK', payload: task,
});

export const addTask = (task) => ({
  type: 'ADD_TASK', task,
});

export const deleteTask = (taskId) => ({
  type: 'DELETE_TASK', payload: taskId,
});

export const toggleTask = (taskId) => ({
  type: 'TOGGLE_TASK', payload: taskId,
});

export const setIsEditing = (isEditing) => ({
  type: 'SET_IS_EDITING', isEditing,
});

export const setTaskId = (taskId) => ({
  type: 'SET_TASK_ID', taskId,
});

export const editTask = (task) => ({
  type: 'EDIT_TASK', task,
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER', filter,
});

export const setSearchTerm = (searchTerm) => ({
  type: 'SET_SEARCH_TERM', searchTerm,
});
