import React, { FunctionComponent } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { get, orderBy } from 'lodash'
import moment from 'moment'

import { Avatar, Body, ConversationFooter, Error } from '../../components'
import { useStore } from '../../store'

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

  const team = useStore(state => state.nav.team)
  const conversation = useStore(
    state => state.conversations.conversations
  ).find(conversation => conversation.id === id)
  const messages = orderBy(
    useStore(state => state.messages.messages).filter(
      ({ conversation }) => conversation.id === id
    ),
    'created',
    'desc'
  )

  if (!conversation) {
    return (
      <Error
        title="Conversations"
        message="Select a conversation from the sidebar"
      />
    )
  }

  return (
    <section className="conversation">
      <section>
        {messages.map((message, index) => (
          <article key={index} className={message.user === ali ? 'mine' : ''}>
            <Link to={`/teams/${get(team, 'id')}/users/${message.user.id}`}>
              <Avatar data={message.user} />
            </Link>
            <div>
              <header>
                <Link to={`/teams/${get(team, 'id')}/users/${message.user.id}`}>
                  <h4>{message.user.name}</h4>
                </Link>
                <aside>{moment(message.created).fromNow(true)}</aside>
              </header>
              <Body body={message.body} />
            </div>
          </article>
        ))}
      </section>
      <ConversationFooter conversation={conversation} />
    </section>
  )
}

export default Conversation
