import React from 'react';
import { useTasks, useTasksDispatch } from '../store/TasksContext';

import styles from './Todo.module.css';
import {
  deleteTodo, setEditMode, setTodo, toggleTodo,
} from '../actions/actions';

function Todo({ id, text, completed }) {
  const state = useTasks();
  const dispatch = useTasksDispatch();

  function onDeleteClick(todoId) {
    dispatch(deleteTodo(todoId));
    if (state.todo.id) {
      dispatch(setTodo({ id: '', text: '', completed: false }));
      dispatch(setEditMode(false));
    }
  }

  function onEditClick(todoId) {
    const foundTodo = state.todos.find(todo => todo.id === todoId);
    dispatch(setTodo(foundTodo));
    dispatch(setEditMode(true));
  }

  function onTodoClick(todoId) {
    dispatch(toggleTodo(todoId));
  }

  return (
    <div className={`${styles.todo} item`}>
      <i
        className={`large circle outline icon ${completed ? 'check teal' : ''}`}
        onClick={() => onTodoClick(id)}
      />
      <span
        className={`${styles.todoText} item ${completed ? styles.completed : ''}`}
        onClick={() => onTodoClick(id)}
      >
        {text}
      </span>
      <div className="right floated content">
        <div className="circular ui icon button" onClick={() => onEditClick(id)}>
          edit
        </div>
        <div className="circular ui icon button" onClick={() => onDeleteClick(id)}>
          delete
        </div>
      </div>
    </div>
  );
}

export default Todo;
