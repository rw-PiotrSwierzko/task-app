import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskComponent.module.css';

const TaskComponent = ({
  completed, text, id, onTaskClick, onEditClick, onDeleteClick,
}) => (
  <div className={`${styles.task}`}>
    <span
      aria-hidden="true"
      className={`${styles.taskText} ${completed ? styles.completed : ''}`}
      onClick={() => onTaskClick(id)}
    >
      {text}
    </span>
    <div>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
      <div onClick={() => onEditClick(id)}>
        edit
      </div>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
      <div onClick={() => onDeleteClick(id)}>
        delete
      </div>
    </div>
  </div>
);

TaskComponent.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  completed: PropTypes.bool,
  onTaskClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

export { TaskComponent };
