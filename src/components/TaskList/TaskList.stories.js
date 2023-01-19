import React from 'react';

import { withReactContext } from 'storybook-react-context';
import { TaskList } from './index';
import { TasksContext } from '../../context/TasksContext';
// import * as TaskStories from '../Task/Task.stories';

const initialState = [
  { id: 0, text: 'Philosopher’s Path', completed: true },
  { id: 1, text: 'Visit the temple', completed: false },
  { id: 2, text: 'Drink matcha', completed: false },
];

// eslint-disable-next-line import/no-default-export
export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [
    withReactContext({
      Context: TasksContext,
      initialState,
    }),
  ],
};

const Template = args => <TaskList {...args} />;

export const Default = Template.bind({});
// Default.args = {
//   tasks: [
//     { ...TaskStories.Default.args.task, id: '1', text: 'Task 1' },
//     { ...TaskStories.Default.args.task, id: '2', text: 'Task 2' },
//     { ...TaskStories.Default.args.task, id: '3', text: 'Task 3' },
//     { ...TaskStories.Default.args.task, id: '4', text: 'Task 4' },
//     { ...TaskStories.Default.args.task, id: '5', text: 'Task 5' },
//   ],
// };

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};
