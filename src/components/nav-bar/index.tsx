import React, { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import { get } from 'lodash'
import clsx from 'clsx'

import { useStoreState } from '../../store'

import TeamSwitcher from '../team-switcher'

import users from '../../store/fixtures/users'

import './index.scss'

const [ali] = users

const NavBar: FunctionComponent = () => {
  const team = useStoreState(state => state.nav.team)

  const posts =
    useStoreState(state => state.posts.posts).filter(
      ({ seen, team: { id } }) => id === get(team, 'id') && !seen.includes(ali)
    ).length > 0
  const notifications =
    useStoreState(state => state.notifications.notifications).filter(
      ({ read, team: { id } }) => id === get(team, 'id') && !read
    ).length > 0
  const conversations =
    useStoreState(state => state.conversations.conversations).filter(
      ({ read, users, team: { id } }) =>
        id === get(team, 'id') && users.includes(ali) && !read
    ).length > 0

  return (
    <header className="header">
      <nav>
        {team && (
          <>
            <NavLink className="home" to={`/teams/${team.id}`} exact />
            <NavLink
              className={clsx('posts', posts && 'unread')}
              to={`/teams/${team.id}/posts`}
            />
            <NavLink
              className={clsx('conversations', conversations && 'unread')}
              to={`/teams/${team.id}/conversations`}
            />
            <NavLink className="members" to={`/teams/${team.id}/members`} />
            <NavLink
              className={clsx('notifications', notifications && 'unread')}
              to={`/teams/${team.id}/notifications`}
            />
          </>
        )}
      </nav>
      <nav>
        <TeamSwitcher />
        <NavLink className="profile" to="/profile" />
        <NavLink className="logout" to="/logout" />
      </nav>
    </header>
  )
}

export default NavBar
