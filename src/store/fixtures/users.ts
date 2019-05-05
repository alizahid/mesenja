import moment from 'moment'

import { User } from '../models/users'

import teams from './teams'

const [mesenja, designplox] = teams

const users: User[] = [
  {
    id: 'ali',
    joined: moment().subtract(4, 'hours'),
    name: 'Ali',
    email: 'ali@mesenja.com',
    roles: [
      {
        public: true,
        role: 'owner',
        team: mesenja
      },
      {
        public: true,
        role: 'owner',
        team: designplox
      }
    ],
    teams: [mesenja, designplox]
  },
  {
    id: 'janet',
    joined: moment().subtract(3, 'hours'),
    name: 'Janet',
    email: 'janet@mesenja.com',
    roles: [
      {
        public: true,
        role: 'member',
        team: mesenja
      }
    ],
    teams: [mesenja]
  },
  {
    id: 'danyal',
    joined: moment().subtract(3, 'hours'),
    name: 'Danyal',
    email: 'danyal@mesenja.com',
    roles: [
      {
        public: true,
        role: 'member',
        team: mesenja
      }
    ],
    teams: [mesenja]
  },
  {
    id: 'sara',
    joined: moment().subtract(2, 'hours'),
    name: 'Sara',
    email: 'sara@mesenja.com',
    roles: [
      {
        public: true,
        role: 'member',
        team: mesenja
      }
    ],
    teams: [mesenja]
  }
]

export default users
