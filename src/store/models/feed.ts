import { Team } from './teams'
import { User } from './users'

import fixtures from '../fixtures/feed'

export interface Feed {
  created: object
  team: Team
  type: string
  user: User
}

export interface FeedModel {
  feed: Feed[]
}

const feed: FeedModel = {
  feed: fixtures
}

export default feed
