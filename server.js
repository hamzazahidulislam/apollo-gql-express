const express = require('express')
const app = express()
const {ApolloServer, gql} = require('apollo-server-express')

const typeDefs = require('./gql/schema')
const resolvers = require('./gql/resolvers')

async function startServer() {
  const server = new ApolloServer({typeDefs, resolvers})
  await server.start()
  server.applyMiddleware({app, path: '/graphql'})

  app.listen({port: 4000}, () =>
    console.log('Now browse to http://localhost:4000' + server.graphqlPath)
  )
}

startServer()
