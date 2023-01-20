import React from 'react';

import { withReactContext } from 'storybook-react-context';
import { TaskList } from './index';
import { TasksContext } from '../../context/TasksContext';

const initialState = {
  tasks: [
    { id: 0, text: 'typescript', completed: true },
    { id: 1, text: 'storybook', completed: true },
    { id: 2, text: 'zustand', completed: true },
    { id: 3, text: 'react query', completed: false },
    { id: 4, text: 'mock service worker', completed: false },
  ],
  status: 'idle',
  error: null,
};

// eslint-disable-next-line import/no-default-export
export default {
  component: TaskList,
  title: 'TaskList (react context)',
};

const Template = args => <TaskList {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  withReactContext({
    Context: TasksContext,
    initialState,
  }),
];

export const Loading = Template.bind({});
Loading.decorators = [
  withReactContext({
    Context: TasksContext,
    initialState: {
      ...initialState,
      status: 'loading',
    },
  }),
];

export const Error = Template.bind({});
Error.decorators = [
  withReactContext({
    Context: TasksContext,
    initialState: {
      tasks: null,
      status: 'error',
      error: { message: 'error msg' },
    },
  }),
];

export const Empty = Template.bind({});
Empty.decorators = [
  withReactContext({
    Context: TasksContext,
    initialState: {
      ...initialState,
      tasks: [],
    },
  }),
];
