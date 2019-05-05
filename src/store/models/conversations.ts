import { Action, Listen, action, listen, thunk } from 'easy-peasy'

import { Team } from './teams'
import messages, { Message } from './messages'
import { User } from './users'

import { conversations as fixtures } from '../fixtures/conversations'

export interface Conversation {
  created: object
  id: string
  last?: Message
  name: string
  read: boolean
  team: Team
  updated: object
  users: User[]
}

export interface ConversationsModel {
  conversations: Conversation[]

  listeners: Listen<ConversationsModel>
  markAsRead: Action<ConversationsModel, string>
  update: Action<ConversationsModel, Message>
}

const conversations: ConversationsModel = {
  conversations: fixtures,

  listeners: listen(on => {
    on(
      messages.add,
      thunk((actions, payload) => {
        actions.update(payload)
      })
    )
  }),
  markAsRead: action((state, payload) => {
    const index = state.conversations.findIndex(({ id }) => id === payload)

    if (index >= 0) {
      state.conversations[index].read = true
    }
  }),
  update: action((state, payload) => {
    const index = state.conversations.findIndex(
      conversation => conversation.id === payload.conversation.id
    )

    if (index >= 0) {
      state.conversations[index].last = payload
      state.conversations[index].updated = payload.created
    }
  })
}

export default conversations
