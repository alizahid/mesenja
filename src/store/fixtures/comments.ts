import chance from 'chance'
import moment from 'moment'
import { random, range, sample } from 'lodash'

import { Comment } from '../models/comments'

import posts from './posts'
import users from './users'

const fixtures: Comment[] = []

range(10000).forEach(() => {
  const post = sample(posts) || posts[0]

  fixtures.push({
    post,
    body: chance().sentence(),
    created: moment(post.created).add(random(1, 120), 'minutes'),
    user: sample(users) || users[0]
  })
})

export default fixtures
