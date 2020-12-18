import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { TaskCollection, TaskInput } from 'Task/View';

const request = () => fetch('/base').then(response => response.json());

const collection = [
  { name: 'Task 1', done: false },
  { name: 'Task 2', done: false },
]

function App() {
  const [name] = useState('Kretes');
  const { data, isLoading, error } = useQuery<any, Error>('example', request);

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="max-w-2xl mx-auto">
      <TaskInput />
      <TaskCollection collection={collection} />
    </div>
  );
}

export { App };
