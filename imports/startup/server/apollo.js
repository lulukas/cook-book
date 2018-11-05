import { ApolloServer, gql } from 'apollo-server-express'
import { WebApp } from 'meteor/webapp'
import { getUser } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash/merge'

import RecipeSchema from '../../api/Recipes/Recipe.graphql'
import RecipesResolvers from '../../api/Recipes/resolvers'
//hi there
const testSchema = `
type Query{
  appTitle: String
  recipes: [Recipe]
}
`

const resolver = {
  Query: {
    appTitle() {
      return 'List of Recipe'
    },
  },
}

const typeDefs = [testSchema, RecipeSchema]

const resolvers = merge(resolver, RecipesResolvers)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const server = new ApolloServer({
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
