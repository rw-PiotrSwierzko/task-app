import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../containers/Task';

const TaskList = ({ loading, tasks }) => {
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span>
        {' '}
        <span>cool</span>
        {' '}
        <span>state</span>
      </span>
    </div>
  );
  if (loading) {
    return (
      <div key="loading" className="list-items" data-testid="loading">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div key="empty" className="list-items" data-testid="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <p className="title-message">You have no tasks</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  })),
};

export { TaskList };
