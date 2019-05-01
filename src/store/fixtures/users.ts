import moment from 'moment'

import { User } from '../models/users'

import teams from './teams'

const [mesenja] = teams

const users: User[] = [
  {
    id: '1',
    joined: moment().subtract(4, 'hours'),
    name: 'Ali Zahid',
    email: 'ali@mesenja.com',
    role: 'owner',
    teams: [mesenja]
  },
  {
    id: '2',
    joined: moment().subtract(3, 'hours'),
    name: 'Janet Paul',
    email: 'janet@mesenja.com',
    role: 'member',
    teams: [mesenja]
  },
  {
    id: '3',
    joined: moment().subtract(3, 'hours'),
    name: 'Danyal Zahid',
    email: 'danyal@mesenja.com',
    role: 'member',
    teams: [mesenja]
  },
  {
    id: '4',
    joined: moment().subtract(2, 'hours'),
    name: 'Sara Zahid',
    email: 'sara@mesenja.com',
    role: 'member',
    teams: [mesenja]
  }
]

export default users
