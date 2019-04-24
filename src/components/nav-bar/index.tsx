import React from 'react'
import { NavLink } from 'react-router-dom'

// import { useStore } from '../../store'

import './index.scss'

export default () => {
  // const { team } = useStore(state => state.nav)
  // const teams = useStore(state => state.teams.teams)

  // const { id } = team || teams[0]

  return (
    <header className="header">
      <nav>
        <NavLink className="home" to="/feed" />
        <NavLink className="posts unread" to="/posts" />
        <NavLink className="members" to="/members" />
      </nav>
      <nav>
        <NavLink className="notifications unread" to="/notifications" />
        <NavLink className="profile" to="/profile" />
        <NavLink className="logout" to="/logout" />
      </nav>
    </header>
  )
}
