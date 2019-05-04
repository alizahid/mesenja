import { Action, action } from 'easy-peasy'

import fixtures from '../fixtures/posts'

import { Team } from './teams'
import { User } from './users'

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
  likes: User[]
  pinned?: boolean
  seen: User[]
  tagged: User[]
  team: Team
  user: User
}

interface PostUser {
  post: string
  user: User
}

export interface PostsModel {
  posts: Post[]

  markAsRead: Action<PostsModel, PostUser>
  toggleLike: Action<PostsModel, PostUser>
}

const posts: PostsModel = {
  posts: fixtures,

  markAsRead: action((state, { post, user }) => {
    const index = state.posts.findIndex(({ id }) => id === post)

    if (index >= 0) {
      state.posts[index].seen = [user]
    }
  }),
  toggleLike: action((state, { post, user }) => {
    const index = state.posts.findIndex(({ id }) => id === post)

    if (index >= 0) {
      const liked = state.posts[index].likes.findIndex(
        ({ id }) => id === user.id
      )

      if (liked >= 0) {
        state.posts[index].likes.splice(liked, 1)
      } else {
        state.posts[index].likes.push(user)
      }
    }
  })
}

export default posts
