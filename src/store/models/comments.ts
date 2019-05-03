import { Post } from './posts'
import { User } from './users'

import fixtures from '../fixtures/comments'

export interface Comment {
  body: string
  created: object
  post: Post
  user: User
}

export interface CommentsModel {
  comments: Comment[]
}

const comments: CommentsModel = {
  comments: fixtures
}

export default comments
