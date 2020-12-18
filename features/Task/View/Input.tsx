import React from 'react';
import { useForm } from "react-hook-form";

export const TaskInput = ({ }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <div className="mb-8">
      <form className="flex items-center justify-between relative" onSubmit={onSubmit}>
        <input
          name="task"
          ref={register({ required: true })}
          placeholder="Add new item..."
          type="text"
          className="p-4 pr-20 border-l-4 border-gray-500 bg-gray-200 w-full shadow-inner outline-none"
        />
        <button type="submit" className="shadow text-blue-100 border-blue-100 bg-gray-500 font-semibold py-2 px-4 absolute right-0 mr-2">Add</button>
      </form>
      <div>{errors.task && <span>This field is required</span>}</div>
    </div>
  );
}
