import chance from 'chance'
import moment from 'moment'
import { orderBy, random, range, sample, sampleSize } from 'lodash'

import { Conversation } from '../models/conversations'
import { Message } from '../models/messages'

import teams from './teams'
import users from './users'

const [ali] = users

export const conversations: Conversation[] = []
export const messages: Message[] = []

range(10).forEach(() => {
  const created = moment().subtract(random(1, 60), 'minutes')

  const members = sampleSize(users, random(2, 5))

  if (
    conversations.find(({ users }) => {
      return (
        users
          .map(({ id }) => id)
          .sort()
          .join() ===
        members
          .map(({ id }) => id)
          .sort()
          .join()
      )
    })
  ) {
    return
  }

  const conversation: Conversation = {
    created,
    id: chance().guid(),
    name: members
      .filter(({ id }) => id !== ali.id)
      .map(({ name }) => name)
      .join(', '),
    read: chance().bool(),
    team: sample(teams) || teams[0],
    updated: created,
    users: members
  }

  const last = orderBy(messages, 'created', 'desc').find(
    ({ conversation: { id } }) => id === conversation.id
  )

  if (last) {
    conversation.last = last
    conversation.updated = moment(last.created)
  }

  conversations.push(conversation)
})

range(1000).forEach(() => {
  const conversation = sample(conversations) || conversations[0]

  messages.push({
    conversation,
    body: chance().sentence(),
    created: moment(conversation.created).add(random(1, 60), 'minutes'),
    user: sample(conversation.users) || ali
  })
})
