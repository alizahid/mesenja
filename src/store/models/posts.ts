import { Action, action } from 'easy-peasy'

import { Team } from './teams'
import { User } from './users'

import fixtures from '../fixtures/posts'
import users from '../fixtures/users'

const [ali] = users

export interface Attachment {
  caption?: string
  type: string
  uri: string
}

export interface Post {
  attachments: Attachment[]
  body: string
  created: object
  id: string
  liked: User[]
  seen: User[]
  tagged: User[]
  team: Team
  user: User
}

export interface PostsModel {
  posts: Post[]

  markAsRead: Action<PostsModel, string>
}

const posts: PostsModel = {
  posts: fixtures,

  markAsRead: action((state, payload) => {
    const index = state.posts.findIndex(({ id }) => id === payload)

    if (index >= 0) {
      if (!state.posts[index].seen.includes(ali)) {
        state.posts[index].seen.push(ali)
      } else {
        state.posts[index].seen = [ali]
      }
    }
  })
}

export default posts
