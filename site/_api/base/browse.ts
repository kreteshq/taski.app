import { Handler, Middleware, Pipeline } from 'kretes';
import { validation } from 'kretes/request';
import { OK } from 'kretes/response';
import { authenticate } from 'kretes/auth';

const validate: Middleware = validation({
  name: { 
    type: String, 
    required: true, 
    length: { min: 3, max: 5 }
  }
})

const something: Middleware = next => async request => {
  console.log('something before')
  const response = await next(request)
  console.log('something after')
  return response;
}

const handler: Handler = async (request) => {
  console.log('something inside')
  return OK('X');
}

export const browse: Pipeline = [
  authenticate,
  validate,
  // something,
  handler
]
