import chance from 'chance'

import { Notification } from '../models/notifications'

import posts from './posts'
import users from './users'

const [ali] = users

const fixtures: Notification[] = []

posts
  .filter(({ tagged }) => tagged.includes(ali))
  .forEach(post => {
    fixtures.push({
      created: post.created,
      id: chance().guid(),
      read: false,
      target: post,
      team: post.team,
      type: 'tag',
      user: post.user
    })
  })

export default fixtures
