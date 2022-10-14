import React from 'react';
import ReactDOM from 'react-dom';

import { TaskApp } from './containers/TaskApp';
import { TasksProvider } from './context/TasksContext';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <TasksProvider>
        <TaskApp />
      </TasksProvider>
    </AppProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
