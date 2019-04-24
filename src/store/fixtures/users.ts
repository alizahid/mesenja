import moment from 'moment'

import { User } from '../models/users'

const users: User[] = [
  {
    id: '1',
    joined: moment().subtract(4, 'hours'),
    name: 'Ali Zahid',
    email: 'ali@mesenja.com',
    role: 'owner'
  },
  {
    id: '2',
    joined: moment().subtract(3, 'hours'),
    name: 'Janet Paul',
    email: 'janet@mesenja.com',
    role: 'member'
  },
  {
    id: '3',
    joined: moment().subtract(3, 'hours'),
    name: 'Danyal Zahid',
    email: 'danyal@mesenja.com',
    role: 'member'
  },
  {
    id: '4',
    joined: moment().subtract(2, 'hours'),
    name: 'Sara Zahid',
    email: 'sara@mesenja.com',
    role: 'member'
  }
]

export default users
