import { Handler, response, Middleware, Pipeline, request } from 'kretes';

const { validate } = request;
const { OK } = response;

const validator: Middleware = validate({ 
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

export const browse: Pipeline = [validator, something, handler]
