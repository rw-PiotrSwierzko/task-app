import React from 'react';

import { TaskComponent } from './index';

// eslint-disable-next-line import/no-default-export
export default {
  component: TaskComponent,
  title: 'Task',
};

const Template = args => <TaskComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 0,
  text: 'typescript',
  completed: false,
};

export const Completed = Template.bind({});
Completed.args = {
  ...Default.args,
  completed: true,
};
