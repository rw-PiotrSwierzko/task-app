import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../containers/Task';

const TaskList = ({ tasks }) => (tasks.length > 0 ? (
  <div>
    {tasks.map(task => (
      <Task key={task.id} {...task} />
    ))}
  </div>
) : null);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  })),
};

export { TaskList };
