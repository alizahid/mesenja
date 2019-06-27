import { Team } from './teams'
import { User } from './users'

import fixtures from '../fixtures/feed'

export interface Feed {
  created: any
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
