import { ApolloServer } from 'apollo-server-express'
import { WebApp } from 'meteor/webapp'
import { getUser } from 'meteor/apollo'
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'

const typeDefs = `
type Query {
  name: String
}
`

const resolvers = {
  Query: {
    name() {
      return 'Lukas Emanuel Klier'
    },
  },
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

server = new ApolloServer({
  schema,
  context: async ({ req }) => ({
    user: await getUser(req.headers.authorization),
  }),
})

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: '/graphql',
})

WebApp.connectHandlers.use('/graphql', (req, res) => {
  if (req.method === 'GET') {
    res.end()
  }
})

export default () => {
  console.log('graphql-server running')
}
