import { Action, action } from 'easy-peasy'

import { Post } from './posts'
import { Team } from './teams'
import { User } from './users'

import fixtures from '../fixtures/notifications'

export interface Notification {
  created: any
  id: string
  read: boolean
  target: Post
  team: Team
  type: string
  user: User
}

export interface NotificationsModel {
  notifications: Notification[]

  markAsRead: Action<NotificationsModel, string>
}

const notifications: NotificationsModel = {
  notifications: fixtures,

  markAsRead: action((state, payload) => {
    const index = state.notifications.findIndex(({ id }) => id === payload)

    if (index >= 0) {
      state.notifications[index].read = true
    }
  })
}

export default notifications
