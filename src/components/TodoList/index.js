import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../../containers/Todo';

const TodoList = ({ todos }) => (todos.length > 0 ? (
  <div className="ui items">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))}
  </div>
) : null);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  })),
};

export { TodoList };
