import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTasks } from '../context/TasksContext';
import { Button } from '../components/Button';
import { useTask } from '../hooks/Task';

const EditTask = ({ taskId }) => {
  const tasks = useTasks();
  const { task, setTask, updateTask } = useTask();

  useEffect(() => {
    setTask(tasks.find(t => t.id === taskId));
  }, [taskId]);

  function handleSubmit(e) {
    e.preventDefault();

    updateTask();
  }

  function handleChange(e) {
    setTask({
      ...task,
      text: e.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input defaultValue={task.text} onChange={handleChange} type="text" />
      <Button primary type="submit">Save</Button>
    </form>
  );
};

EditTask.propTypes = {
  taskId: PropTypes.number,
};

export { EditTask };
