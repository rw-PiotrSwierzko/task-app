import React from 'react';
import PropTypes from 'prop-types';
import { useTasksDispatch } from '../context/TasksContext';

import styles from './Task.module.css';
import {
  deleteTask, setIsEditing, setTaskId, toggleTask,
} from '../actions/actions';
import { useApp, useAppDispatch } from '../context/AppContext';

const Task = ({ id, text, completed }) => {
  const app = useApp();
  const dispatch = useTasksDispatch();
  const appDispatch = useAppDispatch();

  function onDeleteClick(taskId) {
    dispatch(deleteTask(taskId));
    if (app.taskId === taskId) {
      appDispatch(setIsEditing(false));
    }
  }

  function onEditClick(taskId) {
    appDispatch(setTaskId(taskId));
    appDispatch(setIsEditing(true));
  }

  function onTaskClick(taskId) {
    dispatch(toggleTask(taskId));
  }

  return (
    <div className={`${styles.task}`}>
      <span
        aria-hidden="true"
        className={`${styles.taskText} ${completed ? styles.completed : ''}`}
        onClick={() => onTaskClick(id)}
      >
        {text}
      </span>
      <div>
        <div aria-hidden="true" onClick={() => onEditClick(id)}>
          edit
        </div>
        <div aria-hidden="true" onClick={() => onDeleteClick(id)}>
          delete
        </div>
      </div>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  completed: PropTypes.bool,
};

export { Task };
