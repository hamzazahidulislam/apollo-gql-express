const {ApolloServer, gql} = require('apollo-server-express')
const PostType = require('./PostType')
const rootScema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`

module.exports = [rootScema, PostType]
