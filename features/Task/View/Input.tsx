import React from 'react';

export const TaskInput = ({}) => {
  return (
    <div className="flex items-center justify-between relative mb-8">
      <input
        placeholder="Add new item..."
        type="text"
        className="p-4 pr-20 border-l-4 border-gray-500 bg-gray-200 w-full shadow-inner outline-none"
        v-model="state.newTask"
      />
      <button className="shadow text-blue-100 border-blue-100 bg-gray-500 font-semibold py-2 px-4 absolute right-0 mr-2">Add</button>
    </div>
  );
}
