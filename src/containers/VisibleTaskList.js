import React from 'react';
import { useTasks } from '../context/TasksContext';
import { TaskList } from '../components/TaskList';
import { useApp } from '../context/AppContext';

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return tasks;
    case 'SHOW_COMPLETED':
      return tasks.filter(task => task.completed);
    case 'SHOW_INCOMPLETED':
      return tasks.filter(task => !task.completed);
    default:
      return tasks;
  }
};

const includesLowerCase = (searchTerm) => task => task.text.toLowerCase().includes(searchTerm.toLowerCase());

const getFilteredTasks = (tasks, searchTerm) => tasks.filter(includesLowerCase(searchTerm));

const VisibleTaskList = () => {
  const tasks = useTasks();
  const { filter, searchTerm } = useApp();

  const visibleTasks = getVisibleTasks(tasks, filter);

  return tasks.length ? (
    <TaskList tasks={getFilteredTasks(visibleTasks, searchTerm)} />
  ) : null;
};

export { VisibleTaskList };
