import { Handler, database as db } from 'kretes';
import { Page } from 'kretes/response';

const handler: Handler = async ({ context, params, url }) => {
  const { performServerSideRendering } = context;

  const tasks = await db.from('task')

  const { app, dehydratedState } = await performServerSideRendering('/ssr', { url: '/', tasks }) 

  return Page('index', { app, dehydratedState });
};

export const ssr = handler;
