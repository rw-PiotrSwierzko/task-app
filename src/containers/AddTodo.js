import React, { useState } from 'react';
import { useTasksDispatch } from '../context/TasksContext';
import { addTodo } from '../actions/actions';
import { Button } from '../components/Button';

function AddTodo() {
  const dispatch = useTasksDispatch();

  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (text.length) {
      dispatch(addTodo({
        id: Math.random(),
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
      <input onChange={handleChange} placeholder="New todo" type="text" />
      <Button primary type="submit">Add</Button>
    </form>
  );
}

export { AddTodo };
