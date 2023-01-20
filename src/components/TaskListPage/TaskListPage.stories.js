import React from 'react';
import { rest } from 'msw';

import { TaskListPage } from './TaskListPage';

const initialState = [
  { id: 0, text: 'typescript', completed: true },
  { id: 1, text: 'axios', completed: true },
  { id: 2, text: 'storybook', completed: true },
  { id: 3, text: 'zustand', completed: true },
  { id: 4, text: 'chakra', completed: false },
  { id: 5, text: 'react query', completed: false },
  { id: 6, text: 'react-hook-form', completed: false },
  { id: 7, text: 'mock service worker', completed: false },
];

// eslint-disable-next-line import/no-default-export
export default {
  component: TaskListPage,
  title: 'TaskListPage (react query, mock service worker)',
};

const Template = args => <TaskListPage {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [
      rest.get(
        'https://yoururl.com/tasks',
        (req, res, ctx) => res(ctx.json(initialState)),
      ),
    ],
  },
};

export const Error = Template.bind({});
Error.parameters = {
  msw: {
    handlers: [
      rest.get(
        'https://yoururl.com/tasks',
        (req, res, ctx) => res(ctx.status(403)),
      ),
    ],
  },
};
