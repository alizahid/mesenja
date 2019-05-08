import moment from 'moment'
import { orderBy, random, range, sample, sampleSize } from 'lodash'
// @ts-ignore
import { loremIpsum as lorem } from 'lorem-ipsum'

import { Conversation } from '../models/conversations'
import { Message } from '../models/messages'

import teams from './teams'
import users from './users'

const [mesenja] = teams
const [ali] = users

export const conversations: Conversation[] = []
export const messages: Message[] = []

range(1, 10).forEach(id => {
  const last: Message | undefined = orderBy(messages, 'created', 'desc').find(
    ({ conversation }) => conversation.id === String(id)
  )

  const created = moment().subtract(random(1, 60), 'minutes')

  const members = sampleSize(users, random(2, users.length))

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

  conversations.push({
    created,
    last,
    id: String(id),
    name: members
      .filter(({ id }) => id !== ali.id)
      .map(({ name }) => name)
      .join(', '),
    read: !!random(0, 1),
    team: mesenja,
    updated: last ? last.created : created,
    users: members
  })
})

range(0, 100).forEach(() => {
  const [first] = conversations

  const conversation = sample(conversations) || first

  messages.push({
    conversation,
    body: lorem(),
    created: moment().subtract(random(1, 60), 'minutes'),
    user: sample(conversation.users) || ali
  })
})
