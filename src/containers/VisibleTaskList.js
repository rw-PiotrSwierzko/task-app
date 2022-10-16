import React from 'react';
import { useTasks } from '../context/TasksContext';
import { TaskList } from '../components/TaskList';
import { useApp } from '../context/AppContext';

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return tasks;
    case 'SHOW_COMPLETED':
      return tasks.filter(t => t.completed);
    case 'SHOW_INCOMPLETED':
      return tasks.filter(t => !t.completed);
    default:
      return tasks;
  }
};

const includesLowerCase = (searchTerm) => task => task.text.toLowerCase().includes(searchTerm.toLowerCase());

const getFilteredTasks = (tasks, searchTerm) => tasks.filter(includesLowerCase(searchTerm));

const VisibleTaskList = () => {
  const state = useTasks();
  const app = useApp();

  const visibleTasks = getVisibleTasks(state.tasks, state.filter);

  return state.tasks.length > 0 ? (
    <TaskList tasks={getFilteredTasks(visibleTasks, app.searchTerm)} />
  ) : null;
};

export { VisibleTaskList };
