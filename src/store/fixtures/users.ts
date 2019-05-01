import moment from 'moment'
import shortid from 'shortid'

import { User } from '../models/users'

import teams from './teams'

const [mesenja, designplox] = teams

const users: User[] = [
  {
    id: shortid.generate(),
    joined: moment().subtract(4, 'hours'),
    name: 'Ali Zahid',
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
    id: shortid.generate(),
    joined: moment().subtract(3, 'hours'),
    name: 'Janet Paul',
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
    id: shortid.generate(),
    joined: moment().subtract(3, 'hours'),
    name: 'Danyal Zahid',
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
    id: shortid.generate(),
    joined: moment().subtract(2, 'hours'),
    name: 'Sara Zahid',
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
