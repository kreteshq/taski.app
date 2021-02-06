import { Handler, response, database as db } from 'kretes';

const { OK } = response;

export const browse: Handler = async ({ }) => {
  const collection = await db.from('task');
  return OK(collection);
}

