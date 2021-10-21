const Post = require('../../models/Post.model')

module.exports = {
  Query: {
    hello: () => 'Hello world!',
    getAllPosts: async () => {
      return (posts = await Post.find())
    },
    getPost: async (parent, args, context, info) => {
      const {id} = args
      return await Post.findById(id)
    },
  },
  Mutation: {
    createPost: async (parent, args, context, info) => {
      const {title, description} = args
      const post = new Post({title, description})
      await post.save()
      return post
    },
    deletePost: async (parent, args, context, info) => {
      const {id} = args
      await Post.findByIdAndDelete(id)
      return 'Ok. post deleted'
    },
  },
}
