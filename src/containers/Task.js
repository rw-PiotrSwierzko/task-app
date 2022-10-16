import React from 'react';
import PropTypes from 'prop-types';
import { useTasks, useTasksDispatch } from '../context/TasksContext';

import styles from './Task.module.css';
import {
  deleteTask, setIsEditing, setTaskId, setTask, toggleTask,
} from '../actions/actions';
import { useAppDispatch } from '../context/AppContext';

const Task = ({ id, text, completed }) => {
  const appDispatch = useAppDispatch();

  const state = useTasks();
  const dispatch = useTasksDispatch();

  function onDeleteClick(taskId) {
    dispatch(deleteTask(taskId));
    if (state.task.id) {
      dispatch(setTask({ id: '', text: '', completed: false }));
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
    <div className={`${styles.task} item`}>
      <i
        aria-hidden="true"
        className={`large circle outline icon ${completed ? 'check teal' : ''}`}
        onClick={() => onTaskClick(id)}
      />
      <span
        aria-hidden="true"
        className={`${styles.taskText} item ${completed ? styles.completed : ''}`}
        onClick={() => onTaskClick(id)}
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

Task.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  completed: PropTypes.bool,
};

export { Task };
