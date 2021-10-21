const {ApolloServer, gql} = require('apollo-server-express')
module.exports = gql`
  type Post {
    id: ID
    title: String
    description: String
  }
  type Query {
    hello: String

    getAllPosts: [Post]

    getPost(id: ID): Post
  }

  input PostInput {
    title: String
    description: String
  }

  type Mutation {
    createPost(title: String, description: String): Post
    deletePost(id: ID): String
    updatePost(id: ID, title: String, description: String): Post
  }
`
