import moment from 'moment'
// @ts-ignore
import { loremIpsum as lorem } from 'lorem-ipsum'

import { Comment } from '../models/comments'

import posts from './posts'
import users from './users'

const [one, two, three, four] = posts
const [ali, janet, danyal, sara] = users

const fixtures: Comment[] = [
  {
    body: lorem(),
    created: moment().subtract(1, 'hours'),
    post: one,
    user: ali
  },
  {
    body: lorem(),
    created: moment().subtract(2, 'hours'),
    post: one,
    user: sara
  },
  {
    body: lorem(),
    created: moment().subtract(3, 'hours'),
    post: one,
    user: danyal
  },
  {
    body: lorem(),
    created: moment().subtract(3, 'hours'),
    post: two,
    user: janet
  },
  {
    body: lorem(),
    created: moment().subtract(4, 'hours'),
    post: three,
    user: ali
  },
  {
    body: lorem(),
    created: moment().subtract(4, 'hours'),
    post: four,
    user: ali
  }
]

export default fixtures
