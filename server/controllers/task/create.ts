import { Handler, database as db } from 'kretes';
import { OK } from 'kretes/response';

export const create: Handler = async ({ params }) => {
  const { name } = params;

  await db.from('task').insert({ name });

  return OK('Added');
}

