import React from 'react';
import { useTasks } from '../store/TasksContext';
import { TodoList } from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_INCOMPLETED':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const getFilteredTodos = (todos, searchTerm) => todos.filter(todo => todo.text.includes(searchTerm));

const VisibleTodoList = () => {
  const state = useTasks();

  const visibleTodos = getVisibleTodos(state.todos, state.filter);

  return state.todos.length > 0 ? (
    <TodoList todos={getFilteredTodos(visibleTodos, state.searchTerm)} />
  ) : null;
};

export { VisibleTodoList };
