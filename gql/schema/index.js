const { ApolloServer, gql } = require('apollo-server-express');
const bookSchema=require('./bookSchema')
const rootScema = gql`

  type Query {
   _:Boolean
  }

 type Mutation{
     _:Boolean
 }

`;

module.exports=[rootScema,bookSchema]