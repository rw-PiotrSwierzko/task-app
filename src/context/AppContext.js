import { createContext, useContext, useReducer } from 'react';
import { appReducer } from '../reducers/appReducer';

const initialState = {
  isEditing: false,
  todoId: '',
  searchTerm: '',
};

const AppContext = createContext(null);
const AppDispatchContext = createContext(null);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
};

const useApp = () => useContext(AppContext);

const useAppDispatch = () => useContext(AppDispatchContext);

export {
  AppProvider, useApp, useAppDispatch,
};
