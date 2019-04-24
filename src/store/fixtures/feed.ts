import moment from 'moment'

import { Feed } from '../models/feed'

import teams from './teams'
import users from './users'

const [mesenja] = teams
const [ali, janet, danyal, sara] = users

const fixtures: Feed[] = [
  {
    created: moment().subtract(2, 'hour'),
    team: mesenja,
    type: 'user_joined',
    user: sara
  },
  {
    created: moment().subtract(3, 'hour'),
    team: mesenja,
    type: 'user_joined',
    user: danyal
  },
  {
    created: moment().subtract(3, 'hour'),
    team: mesenja,
    type: 'user_joined',
    user: janet
  },
  {
    created: moment().subtract(4, 'hour'),
    team: mesenja,
    type: 'user_joined',
    user: ali
  },
  {
    created: moment().subtract(4, 'hour'),
    team: mesenja,
    type: 'team_created',
    user: ali
  }
]

export default fixtures
