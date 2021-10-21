const express = require('express')
const app = express()
const {ApolloServer, gql} = require('apollo-server-express')
const mongoose = require('mongoose')

const typeDefs = require('./gql/schema')
const resolvers = require('./gql/resolvers')

async function startServer() {
  const server = new ApolloServer({typeDefs, resolvers})
  await server.start()
  server.applyMiddleware({app, path: '/graphql'})

  await mongoose.connect('mongodb://localhost:27017/apollo-gql-express', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })

  console.log('mongoose connect started')

  app.listen({port: 4000}, () =>
    console.log('Now browse to http://localhost:4000' + server.graphqlPath)
  )
}

startServer()
