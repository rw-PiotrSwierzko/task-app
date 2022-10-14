import React from 'react';
import Todo from '../../containers/Todo';

const TodoList = ({ todos }) => (todos.length > 0 ? (
  <div className="ui items">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))}
  </div>
) : null);

export { TodoList };
