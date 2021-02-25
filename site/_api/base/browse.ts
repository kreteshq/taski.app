import { Handler, response, Middleware, Pipeline } from 'kretes';

const { OK } = response;

const something: Middleware = next => async request => {
  console.log('something before')
  const response = await next(request)
  console.log('something after')
  return response;
}

const handler: Handler = async ({}) => {
  console.log('something inside')
  return OK('X');
}

export const browse: Pipeline = [something, handler]
