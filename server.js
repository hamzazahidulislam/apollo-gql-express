/** @format */

const express = require('express')
const {gql, ApolloServer} = require('apollo-server-express')

const typeDefs = gql`
     type Query {
          hello:String;
     }
`

const resolvers = {
  Query: {
    hello: () => {
      return 'Hello, world'
    },
  },
}

async function startServer() {
  const app = express()
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  })

  await apolloServer.start()

  app.use((req, res) => {
    res.send('Hello from express apollo server')
  })

  apolloServer.applyMiddleware({app: app})
  app.listen(4000, () => console.log('listening on port 4000'))
}
startServer()
