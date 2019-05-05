import { last } from 'lodash'

import { Message } from '../store/models/messages'
import { User } from '../store/models/users'

interface Group {
  messages: Message[]
  time: object
  user: User
}

export default (messages: Message[]) => {
  const groups = messages.reduce((groups: Group[], message: Message) => {
    const previous: Group | undefined = last(groups)

    if (previous && previous.user.id === message.user.id) {
      previous.messages.unshift(message)
    } else {
      groups.push({
        messages: [message],
        time: message.created,
        user: message.user
      })
    }

    return groups
  }, [])

  return groups
}
