import moment from 'moment'
import { random } from 'lodash'

import { Feed } from '../models/feed'

import teams from './teams'
import users from './users'

const [ali] = users

const fixtures: Feed[] = []

teams.forEach(team => {
  fixtures.push({
    team,
    created: team.created,
    type: 'team_created',
    user: ali
  })
})

users.forEach(user => {
  user.teams.forEach(team => {
    fixtures.push({
      team,
      user,
      created: moment(team.created).add(random(1, 360), 'minutes'),
      type: 'user_joined'
    })
  })
})

export default fixtures
