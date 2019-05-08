import moment from 'moment'
import { random, range, sample, sampleSize } from 'lodash'
// @ts-ignore
import { loremIpsum as lorem } from 'lorem-ipsum'

import { Post } from '../models/posts'

import teams from './teams'
import users from './users'

const [mesenja] = teams
const [ali] = users

const fixtures: Post[] = []

range(50).forEach(index => {
  fixtures.push({
    attachments: [],
    body: lorem({
      count: random(1, 3),
      units: 'paragraph'
    }),
    created: moment().subtract(random(1, 60), 'minutes'),
    id: `post-${index}`,
    likes: sampleSize(users, random(1, users.length)),
    pinned: random(10) > 8,
    seen: sampleSize(users, random(1, users.length)),
    tagged: sampleSize(users, random(1, users.length)),
    team: sample(teams) || mesenja,
    user: sample(users) || ali
  })
})

export default fixtures
