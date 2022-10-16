import React, { useRef } from 'react';
import { Button } from '../components/Button';
import { useTask } from '../hooks/Task';

function AddTask() {
  const { createTask, setText } = useTask();
  const textRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    createTask();
    textRef.current.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={textRef} onChange={e => setText(e.target.value)} placeholder="New task" type="text" />
      <Button primary type="submit">Add</Button>
    </form>
  );
}

export { AddTask };
