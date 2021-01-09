import React from 'react';
import { TaskElement } from './Element';
import { Task } from '@features/Task/Shape';

export const TaskCollection = ({ collection = [] }) => {
  return (
    <ul className="m-0 my-2 p-0 list-none w-full">
      {collection.map((element: Task) => <TaskElement {...element} />)}
    </ul>
  );
}
