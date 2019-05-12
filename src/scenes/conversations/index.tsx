import React, { FunctionComponent } from 'react'
import { NavLink, Route } from 'react-router-dom'
import { get, orderBy } from 'lodash'
import clsx from 'clsx'
import moment from 'moment'

import { useStore } from '../../store'

import Conversation from '../conversation'

import users from '../../store/fixtures/users'

import './index.scss'

const [ali] = users

const Conversations: FunctionComponent = () => {
  const team = useStore(state => state.nav.team)
  const conversations = orderBy(
    useStore(state => state.conversations.conversations).filter(
      ({ users, team: { id } }) => id === get(team, 'id') && users.includes(ali)
    ),
    'updated',
    'desc'
  )

  return (
    <main className="conversations">
      <aside>
        {conversations.map((conversation, index) => (
          <NavLink
            key={index}
            className={clsx(conversation.read && 'read')}
            to={`/teams/${get(team, 'id')}/conversations/${conversation.id}`}
          >
            <div>
              <h4>{conversation.name}</h4>
            </div>
            <aside>{moment(conversation.updated).fromNow(true)}</aside>
          </NavLink>
        ))}
      </aside>
      <Route path="/teams/:team/conversations/:id" component={Conversation} />
    </main>
  )
}

export default Conversations
