import chance from 'chance'
import moment from 'moment'
import { kebabCase, random, range } from 'lodash'

import { Team } from '../models/teams'

const fixtures: Team[] = []

range(10).forEach(() => {
  const name = chance().city()

  fixtures.push({
    name,
    created: moment().subtract(random(1, 360), 'minutes'),
    id: kebabCase(name)
  })
})

export default fixtures
