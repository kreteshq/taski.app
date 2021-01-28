import React from 'react';

export const TaskElement: React.FC<{ name: string }> = ({ name }) => {
  return (
    <li className="bg-white shadow mb-2">
      <label className="flex justify-start items-center p-4">
        <div className="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2">
          <input type="checkbox" className="opacity-0 absolute" />
          <svg className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none;" viewBox="0 0 20 20">
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        </div>
        <div className="ml-2">{name}</div>
      </label>
    </li>
  );
}
