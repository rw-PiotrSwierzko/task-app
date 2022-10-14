import React from 'react';
import PropTypes from 'prop-types';
import { useTasks, useTasksDispatch } from '../context/TasksContext';

import styles from './Todo.module.css';
import {
  deleteTodo, setIsEditing, setTaskId, setTodo, toggleTodo,
} from '../actions/actions';
import { useAppDispatch } from '../context/AppContext';

const Todo = ({ id, text, completed }) => {
  const appDispatch = useAppDispatch();

  const state = useTasks();
  const dispatch = useTasksDispatch();

  function onDeleteClick(todoId) {
    dispatch(deleteTodo(todoId));
    if (state.todo.id) {
      dispatch(setTodo({ id: '', text: '', completed: false }));
      appDispatch(setIsEditing(false));
    }
  }

  function onEditClick(taskId) {
    appDispatch(setTaskId(taskId));
    appDispatch(setIsEditing(true));
  }

  function onTodoClick(todoId) {
    dispatch(toggleTodo(todoId));
  }

  return (
    <div className={`${styles.todo} item`}>
      <i
        aria-hidden="true"
        className={`large circle outline icon ${completed ? 'check teal' : ''}`}
        onClick={() => onTodoClick(id)}
      />
      <span
        aria-hidden="true"
        className={`${styles.todoText} item ${completed ? styles.completed : ''}`}
        onClick={() => onTodoClick(id)}
      >
        {text}
      </span>
      <div className="right floated content">
        <div aria-hidden="true" className="circular ui icon button" onClick={() => onEditClick(id)}>
          edit
        </div>
        <div aria-hidden="true" className="circular ui icon button" onClick={() => onDeleteClick(id)}>
          delete
        </div>
      </div>
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  completed: PropTypes.bool,
};

export { Todo };
