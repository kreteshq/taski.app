import React from 'react';
import { useQuery } from 'react-query';

import { TaskCollection, TaskInput } from 'Task/View';

const toJSON = _ => _.json();
const request = () => fetch('/_api/task').then(toJSON);

const Container = ({ children }) =>
  <div className="max-w-2xl mx-auto">{children}</div>

function App() {
  const { data, isLoading, error } = useQuery<any, Error>('tasks', request);

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <Container>
      <TaskInput />
      <TaskCollection collection={data} />
    </Container>
  );
}

export { App };
