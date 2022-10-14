import React from 'react';
import ReactDOM from 'react-dom';

import { TodoApp } from './containers/TodoApp';
import { TasksProvider } from './store/TasksContext';

function App() {
  return (
    <TasksProvider>
      <TodoApp />
    </TasksProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
