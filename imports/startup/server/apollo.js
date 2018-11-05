import { ApolloServer, gql } from 'apollo-server-express'
import { WebApp } from 'meteor/webapp'
import { getUser } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'

import RecipeSchema from '../../api/Recipe/Recipe.graphql'

const testSchema = `
type Query{
  appTitle: String
  recipes: [Recipe]
}
`

const typeDefs = [testSchema, RecipeSchema]

const resolvers = {
  Query: {
    appTitle() {
      return 'Recipes'
    },
    recipes() {
      return [
        {
          _id: 'sdoifadnfllk',
          name: 'Cordon Bleu',
        },
        {
          _id: 'sdoifadasdflk',
          name: 'Rehrücken an Pilzrahmsauce',
        },
      ]
    },
  },
}

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
