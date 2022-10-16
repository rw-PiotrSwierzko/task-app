import React, { useId, useState } from 'react';
import { useTasksDispatch } from '../context/TasksContext';
import { addTask } from '../actions/actions';
import { Button } from '../components/Button';

function AddTask() {
  const dispatch = useTasksDispatch();

  const [text, setText] = useState('');

  const id = useId(); // v18

  function handleSubmit(e) {
    e.preventDefault();

    if (text.length) {
      dispatch(addTask({
        id,
        text,
        completed: false,
      }));
    }
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} placeholder="New task" type="text" />
      <Button primary type="submit">Add</Button>
    </form>
  );
}

export { AddTask };
