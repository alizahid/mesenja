import React, { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import { get } from 'lodash'

import { useStore } from '../../store'

import TeamSwitcher from '../team-switcher'

import users from '../../store/fixtures/users'

import './index.scss'

const [ali] = users

const NavBar: FunctionComponent = () => {
  const team = useStore(state => state.nav.team)

  const posts =
    useStore(state => state.posts.posts).filter(
      ({ seen, team: { id } }) => id === get(team, 'id') && !seen.includes(ali)
    ).length > 0

  const notifications =
    useStore(state => state.notifications.notifications).filter(
      ({ read, team: { id } }) => id === get(team, 'id') && !read
    ).length > 0

  return (
    <header className="header">
      <nav>
        <TeamSwitcher />
        {team && (
          <>
            <NavLink className="home" to={`/teams/${team.id}`} exact />
            <NavLink
              className={`posts ${posts ? 'unread' : ''}`}
              to={`/teams/${team.id}/posts`}
            />
            <NavLink
              className="conversations"
              to={`/teams/${team.id}/conversations`}
            />
            <NavLink className="members" to={`/teams/${team.id}/members`} />
            <NavLink
              className={`notifications ${notifications ? 'unread' : ''}`}
              to={`/teams/${team.id}/notifications`}
            />
          </>
        )}
      </nav>
      <nav>
        <NavLink className="profile" to="/profile" />
        <NavLink className="logout" to="/logout" />
      </nav>
    </header>
  )
}

export default NavBar
