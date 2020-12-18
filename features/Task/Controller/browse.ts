import { Handler, response } from 'kretes';

const { OK } = response;

const collection = [
  { name: 'Task 11', done: false },
  { name: 'Task 22', done: false },
]

export const browse: Handler = ({ }) => {
  return OK(collection);
}

