import moment from 'moment'

import { User } from '../models/users'

const users: User[] = [
  {
    id: '1',
    joined: moment().subtract(4, 'hour'),
    name: 'Ali Zahid',
    email: 'ali@mesenja.com',
    role: 'owner'
  },
  {
    id: '2',
    joined: moment().subtract(3, 'hour'),
    name: 'Janet Paul',
    email: 'janet@mesenja.com',
    role: 'member'
  },
  {
    id: '3',
    joined: moment().subtract(3, 'hour'),
    name: 'Danyal Zahid',
    email: 'danyal@mesenja.com',
    role: 'member'
  },
  {
    id: '4',
    joined: moment().subtract(2, 'hour'),
    name: 'Sara Zahid',
    email: 'sara@mesenja.com',
    role: 'member'
  }
]

export default users
