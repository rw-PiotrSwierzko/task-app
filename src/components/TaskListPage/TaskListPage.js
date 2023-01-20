import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { TaskListAsync } from '../TaskListAsync';

const queryClient = new QueryClient();

const TaskListPage = () => (
  <QueryClientProvider client={queryClient}>
    <TaskListAsync />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export { TaskListPage };
