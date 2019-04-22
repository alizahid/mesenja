import { User } from './users'

import fixtures from '../fixtures/posts'

export interface Attachment {
  caption?: string
  type: string
  uri: string
}

export interface Post {
  attachments?: Attachment[]
  body: string
  created: object
  tagged?: User[]
  user: User
}

export interface PostsModel {
  posts: Post[]
}

const posts: PostsModel = {
  posts: fixtures
}

export default posts
