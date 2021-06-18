const types = /* GraphQL */`
type Query {
  hello: String 
}
`

const resolvers = {
  Query: {
    hello: () => 'Yes, it works!!'
  }
}

export { types, resolvers };
