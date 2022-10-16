import { useId, useState } from 'react';
import { addTask, editTask, setIsEditing } from '../actions/actions';
import { useTasksDispatch } from '../context/TasksContext';
import { useAppDispatch } from '../context/AppContext';

export function useTask() {
  const dispatch = useTasksDispatch();
  const appDispatch = useAppDispatch();

  const [task, setTask] = useState({ text: '' });

  const id = useId(); // v18
  const [text, setText] = useState('');

  const createTask = () => {
    if (text.length) {
      dispatch(addTask({
        id,
        text,
        completed: false,
      }));
    }
  };

  const updateTask = () => {
    if (task.text.length) {
      dispatch(editTask(task));
      appDispatch(setIsEditing(false));
    }
  };

  return {
    createTask,
    setText,
    updateTask,
    setTask,
    task,
  };
}
