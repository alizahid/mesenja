import React, { FunctionComponent, useEffect } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { get, orderBy } from 'lodash'
import clsx from 'clsx'
import moment from 'moment'

import { Avatar, Body, ConversationFooter, Error } from '../../components'
import { groupMessages } from '../../lib'
import { useStoreActions, useStoreState } from '../../store'

import users from '../../store/fixtures/users'

import './index.scss'

const [ali] = users

interface Props {
  id: string
}

const Conversation: FunctionComponent<RouteComponentProps<Props>> = ({
  match
}) => {
  const {
    params: { id }
  } = match

  const team = useStoreState(state => state.nav.team)
  const conversation = useStoreState(
    state => state.conversations.conversations
  ).find(conversation => conversation.id === id)
  const messages = orderBy(
    useStoreState(state => state.messages.messages).filter(
      ({ conversation }) => conversation.id === id
    ),
    'created',
    'desc'
  )

  const markAsRead = useStoreActions(
    actions => actions.conversations.markAsRead
  )

  useEffect(() => {
    markAsRead(id)
  }, [id, markAsRead])

  if (!conversation) {
    return (
      <Error
        title="Conversations"
        message="Select a conversation from the sidebar"
      />
    )
  }

  const groups = groupMessages(messages)

  return (
    <section className="conversation">
      <section>
        {groups.map((group, index) => (
          <article key={index} className={clsx(group.user === ali && 'mine')}>
            <Link to={`/teams/${get(team, 'id')}/users/${group.user.id}`}>
              <Avatar data={group.user} />
            </Link>
            <div>
              <header>
                <Link to={`/teams/${get(team, 'id')}/users/${group.user.id}`}>
                  <h4>{group.user.name}</h4>
                </Link>
                <aside>{moment(group.time).fromNow(true)}</aside>
              </header>
              {group.messages.map((message, index) => (
                <Body key={index} body={message.body} />
              ))}
            </div>
          </article>
        ))}
      </section>
      <ConversationFooter conversation={conversation} />
    </section>
  )
}

export default Conversation
