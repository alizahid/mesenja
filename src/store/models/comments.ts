import { Action, action } from 'easy-peasy'

import { Post } from './posts'
import { User } from './users'

import fixtures from '../fixtures/comments'

export interface Comment {
  body: string
  created: any
  post: Post
  user: User
}

export interface CommentsModel {
  comments: Comment[]

  addComment: Action<CommentsModel, Comment>
}

const comments: CommentsModel = {
  comments: fixtures,

  addComment: action((state, payload) => {
    state.comments.push(payload)
  })
}

export default comments
