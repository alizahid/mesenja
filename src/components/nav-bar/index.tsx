import React, { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'

import { useStore } from '../../store'

import TeamSwitcher from '../team-switcher'

import './index.scss'

const NavBar: FunctionComponent = () => {
  const { team } = useStore(state => state.nav)

  return (
    <header className="header">
      <nav>
        <TeamSwitcher />
        {team && (
          <>
            <NavLink className="home" to={`/teams/${team.id}`} exact />
            <NavLink className="posts unread" to={`/teams/${team.id}/posts`} />
            <NavLink className="members" to={`/teams/${team.id}/members`} />
            <NavLink
              className="notifications unread"
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
