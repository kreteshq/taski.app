import { Handler, database as db } from 'kretes';
import { OK } from 'kretes/response';

export const browse: Handler = async ({ }) => {
  const collection = await db.from('task');
  return OK(collection);
}

