import comments, { CommentsModel } from './comments'
import feed, { FeedModel } from './feed'
import nav, { NavModel } from './nav'
import notifications, { NotificationsModel } from './notifications'
import posts, { PostsModel } from './posts'
import teams, { TeamsModel } from './teams'
import users, { UsersModel } from './users'

export interface StoreModel {
  comments: CommentsModel
  feed: FeedModel
  nav: NavModel
  notifications: NotificationsModel
  posts: PostsModel
  teams: TeamsModel
  users: UsersModel
}

const model: StoreModel = {
  comments,
  feed,
  nav,
  notifications,
  posts,
  teams,
  users
}

export default model
