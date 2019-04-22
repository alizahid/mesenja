import users, { UsersModel } from './users'
import posts, { PostsModel } from './posts'

export interface StoreModel {
  posts: PostsModel
  users: UsersModel
}

const model: StoreModel = {
  posts,
  users
}

export default model
