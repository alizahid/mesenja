import comments, { CommentsModel } from './comments'
import conversations, { ConversationsModel } from './conversations'
import feed, { FeedModel } from './feed'
import messages, { MessagesModel } from './messages'
import nav, { NavModel } from './nav'
import notifications, { NotificationsModel } from './notifications'
import posts, { PostsModel } from './posts'
import teams, { TeamsModel } from './teams'
import users, { UsersModel } from './users'

export interface StoreModel {
  comments: CommentsModel
  conversations: ConversationsModel
  feed: FeedModel
  messages: MessagesModel
  nav: NavModel
  notifications: NotificationsModel
  posts: PostsModel
  teams: TeamsModel
  users: UsersModel
}

const model: StoreModel = {
  comments,
  conversations,
  feed,
  messages,
  nav,
  notifications,
  posts,
  teams,
  users
}

export default model
