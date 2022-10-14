import { createContext, useContext, useReducer } from 'react';
import { tasksReducer } from '../reducers/tasksReducer';
// import { usePersistedContext, usePersistedReducer } from './localStorage';

const initialTasks = {
  todos: [
    { id: 0, text: 'Philosopher’s Path', completed: true },
    { id: 1, text: 'Visit the temple', completed: false },
    { id: 2, text: 'Drink matcha', completed: false },
  ],
  todo: {
    id: '',
    text: '',
    completed: false,
  },
  searchTerm: '',
};

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

const TasksProvider = ({ children }) => {
  // const tasksContext = usePersistedContext(useContext(TasksContext));
  // const [tasks, dispatch] = usePersistedReducer(useReducer(reducer, tasksContext));
  const [state, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={state}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

// const useTasks = () => usePersistedContext(useContext(TasksContext));
const useTasks = () => useContext(TasksContext);

const useTasksDispatch = () => useContext(TasksDispatchContext);

export {
  TasksProvider, useTasks, useTasksDispatch,
};
