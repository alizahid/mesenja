import feed, { FeedModel } from './feed'
import nav, { NavModel } from './nav'
import notifications, { NotificationsModel } from './notifications'
import posts, { PostsModel } from './posts'
import teams, { TeamsModel } from './teams'
import users, { UsersModel } from './users'

export interface StoreModel {
  feed: FeedModel
  nav: NavModel
  notifications: NotificationsModel
  posts: PostsModel
  teams: TeamsModel
  users: UsersModel
}

const model: StoreModel = {
  feed,
  nav,
  notifications,
  posts,
  teams,
  users
}

export default model
