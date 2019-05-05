import { Action, Thunk, action, thunk } from 'easy-peasy'

import { Conversation } from './conversations'
import { User } from './users'

import { messages as fixtures } from '../fixtures/conversations'

export interface Message {
  body: string
  conversation: Conversation
  created: object
  user: User
}

export interface MessagesModel {
  messages: Message[]

  send: Thunk<MessagesModel, Message>
  add: Action<MessagesModel, Message>
}

const messages: MessagesModel = {
  messages: fixtures,

  send: thunk((actions, payload) => {
    actions.add(payload)
  }),
  add: action((state, payload) => {
    state.messages.push(payload)
  })
}

export default messages
