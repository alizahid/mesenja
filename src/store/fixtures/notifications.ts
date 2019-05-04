import moment from 'moment'

import { Notification } from '../models/notifications'

import posts from './posts'
import teams from './teams'
import users from './users'

const [, second, , forth] = posts
const [mesenja] = teams
const [, janet, , sara] = users

const fixtures: Notification[] = [
  {
    created: moment().subtract(24, 'minutes'),
    id: '7xQwHUNmuvJ',
    read: false,
    target: second,
    team: mesenja,
    type: 'tag',
    user: janet
  },
  {
    created: moment().subtract(2, 'hours'),
    id: 'mM5fYbbPj5v',
    read: true,
    target: forth,
    team: mesenja,
    type: 'tag',
    user: sara
  }
]

export default fixtures
