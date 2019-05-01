import moment from 'moment'
import shortid from 'shortid'

import { Notification } from '../models/notifications'

import posts from './posts'
import teams from './teams'
import users from './users'

const [, second, , forth] = posts
const [mesenja] = teams
const [janet, sara] = users

const fixtures: Notification[] = [
  {
    created: moment().subtract(24, 'minutes'),
    id: shortid.generate(),
    read: false,
    target: second,
    team: mesenja,
    type: 'tag',
    user: janet
  },
  {
    created: moment().subtract(2, 'hours'),
    id: shortid.generate(),
    read: true,
    target: forth,
    team: mesenja,
    type: 'tag',
    user: sara
  }
]

export default fixtures
