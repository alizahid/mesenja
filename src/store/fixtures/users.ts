import chance from 'chance'
import moment from 'moment'
import { random, range, sampleSize } from 'lodash'

import { User } from '../models/users'

import teams from './teams'

const fixtures: User[] = [
  {
    teams,
    id: chance().guid(),
    joined: moment().subtract(random(1, 100), 'hours'),
    name: 'Ali Zahid',
    email: 'ali@mesenja.com',
    roles: teams.map(team => ({
      team,
      public: true,
      role: 'owner'
    }))
  }
]

range(100).forEach(() => {
  const memberships = sampleSize(teams, 5) || teams

  fixtures.push({
    id: chance().guid(),
    joined: moment().subtract(random(1, 100), 'hours'),
    name: chance().name(),
    email: chance().email(),
    roles: memberships.map(team => ({
      team,
      public: true,
      role: 'member'
    })),
    teams: memberships
  })
})

export default fixtures
