const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...tasks,
        action.task,
      ];
    case 'DELETE_TASK': {
      return [
        ...tasks.filter(task => task.id !== action.taskId),
      ];
    }
    case 'EDIT_TASK': {
      const temp = [...tasks];
      const task = tasks.find(t => t.id === action.task.id);
      task.text = action.task.text;

      return [
        ...temp,
      ];
    }
    case 'TOGGLE_TASK': {
      const temp = [...tasks];
      const task = temp.find(t => t.id === action.taskId);
      task.completed = !task.completed;

      return [
        ...temp,
      ];
    }

    default:
      return tasks;
  }
};

export { tasksReducer };
