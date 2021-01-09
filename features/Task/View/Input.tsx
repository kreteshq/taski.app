import React from 'react';
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
const request = (data: Task) =>
  fetch('/_api/task', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })


export const TaskInput = ({ }) => {
  const { register, handleSubmit, errors, reset } = useForm<Task>();

  const onSubmit = handleSubmit(data => mutation.mutate(data));
  const queryClient = useQueryClient()
  const mutation = useMutation(request, {
    onMutate: async (task) => {
      await queryClient.cancelQueries('tasks')
      const previousTodos = queryClient.getQueryData<Task[]>('tasks')
      queryClient.setQueryData<Task[]>('tasks', collection => [...(collection as Task[]), task])
      return { previousTodos }
    },
  });
  const onSubmit = handleSubmit(data => {
    mutation.mutate(data)
    reset();
  });

  return (
    <div className="mb-8">
      <form className="flex items-center justify-between relative" onSubmit={onSubmit}>
        <input
          name="name"
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
