import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { appReducer } from '../reducers/appReducer';

const initialState = {
  isEditing: false,
  taskId: '',
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

AppProvider.propTypes = {
  children: PropTypes.node,
};

export {
  AppProvider, useApp, useAppDispatch,
};
