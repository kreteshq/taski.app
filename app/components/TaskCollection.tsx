import React from 'react';

import { TaskElement } from '@/components/TaskElement';
import { Task } from '@/types';

export const TaskCollection: React.FC<{ collection: Task[] }> = ({ collection = [] }) => {
  return (
    <ul className="m-0 my-2 p-0 list-none w-full">
      {collection.map((element: Task) => <TaskElement {...element} />)}
    </ul>
  );
}
