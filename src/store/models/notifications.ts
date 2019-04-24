import { Post } from './posts'
import { Team } from './teams'
import { User } from './users'

import fixtures from '../fixtures/notifications'

export interface Notification {
  created: object
  read: boolean
  target: Post
  team: Team
  type: string
  user: User
}

export interface NotificationsModel {
  notifications: Notification[]
}

const notifications: NotificationsModel = {
  notifications: fixtures
}

export default notifications
