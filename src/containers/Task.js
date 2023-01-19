import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTasksDispatch } from '../context/TasksContext';

import {
  deleteTask, setIsEditing, setTaskId, toggleTask,
} from '../actions/actions';
import { useApp, useAppDispatch } from '../context/AppContext';
import { TaskComponent } from '../components/Task';

const Task = ({ id, text, completed }) => {
  const app = useApp();
  const dispatch = useTasksDispatch();
  const appDispatch = useAppDispatch();

  const onDeleteClick = useCallback(() => {
    dispatch(deleteTask(id));
    if (app.taskId === id) {
      appDispatch(setIsEditing(false));
    }
  }, [id]);

  const onEditClick = useCallback(() => {
    appDispatch(setTaskId(id));
    appDispatch(setIsEditing(true));
  }, [id]);

  const onTaskClick = useCallback(() => {
    dispatch(toggleTask(id));
  }, [id]);

  return (
    <TaskComponent
      completed={completed}
      id={id}
      onDeleteClick={onDeleteClick}
      onEditClick={onEditClick}
      onTaskClick={onTaskClick}
      text={text}
    />
  );
};

Task.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  completed: PropTypes.bool,
};

export { Task };
