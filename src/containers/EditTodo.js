import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTasks, useTasksDispatch } from '../context/TasksContext';
import { editTodo, setIsEditing } from '../actions/actions';
import { useAppDispatch } from '../context/AppContext';
import { Button } from '../components/Button';

const EditTodo = ({ taskId }) => {
  const state = useTasks();
  const dispatch = useTasksDispatch();
  const appDispatch = useAppDispatch();

  const [task, setTask] = useState({ text: '' });

  useEffect(() => {
    setTask(state.todos.find(todo => todo.id === taskId));
  }, [taskId]);

  function handleSubmit(e) {
    e.preventDefault();
    if (task.text.length) {
      dispatch(editTodo(task));
      appDispatch(setIsEditing(false));
    }
  }

  function handleChange(e) {
    setTask({
      ...task,
      text: e.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input defaultValue={task?.text} onChange={handleChange} type="text" />
      <Button primary type="submit">Save</Button>
    </form>
  );
};

EditTodo.propTypes = {
  taskId: PropTypes.number,
};

export { EditTodo };
