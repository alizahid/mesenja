import chance from 'chance'
import moment from 'moment'
import { random, range, sample, sampleSize } from 'lodash'

import { Post } from '../models/posts'

import teams from './teams'
import users from './users'

const fixtures: Post[] = []

range(1000).forEach(() => {
  fixtures.push({
    attachments: [],
    body: chance().paragraph(),
    created: moment().subtract(random(1, 360), 'minutes'),
    id: chance().guid(),
    likes: sampleSize(users, random(1, users.length)),
    pinned: random(10) > 8,
    seen: sampleSize(users, random(1, users.length)),
    tagged: sampleSize(users, random(1, users.length)),
    team: sample(teams) || teams[0],
    user: sample(users) || users[0]
  })
})

export default fixtures
