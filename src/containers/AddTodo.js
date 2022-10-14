import React from 'react';
import styled from 'styled-components';
import { useTasks, useTasksDispatch } from '../store/TasksContext';
import {
  addTodo, editTodo, setEditMode, setTodo,
} from '../actions/actions';

const Button = styled.button`
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function AddTodo() {
  const state = useTasks();
  const dispatch = useTasksDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!state.todo.text.length) {
      return;
    }
    if (state.editMode) {
      dispatch(editTodo({ id: state.todo.id, text: state.todo.text }));
      dispatch(setEditMode(false));
    } else {
      const newTodo = {
        id: Math.random(),
        text: state.todo.text,
        completed: false,
      };
      dispatch(addTodo(newTodo));
    }
    dispatch(setTodo({ id: '', text: '', completed: false }));
  }

  function handleChange(e) {
    const text = e.target.value;
    dispatch(setTodo({ ...state.todo, text }));
  }

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="ui large action input">
        <input onChange={handleChange} placeholder="New todo" type="text" value={state.todo.text} />
        <Button primary type="submit">{state.editMode ? 'Save' : 'Add'}</Button>
      </div>
    </form>
  );
}

export default AddTodo;
