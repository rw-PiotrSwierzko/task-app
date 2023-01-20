import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Task } from '../../containers/Task';

function useTasks() {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await axios.get(
        'https://yoururl.com/tasks',
      );
      return data;
    },
  });
}

const TaskListAsync = () => {
  const {
    status, data, error, isFetching,
  } = useTasks();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return (
      <span>
        Error:
        {error.message}
      </span>
    );
  }

  return (
    <>
      <div>
        {data.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
      <div>{isFetching ? 'Background Updating...' : ' '}</div>
    </>
  );
};

export { TaskListAsync };
