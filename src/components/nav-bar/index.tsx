import React from 'react'
import { NavLink } from 'react-router-dom'

import './index.scss'

export default () => {
  return (
    <header className="header">
      <nav>
        <NavLink className="home" to="/" exact />
        <NavLink className="posts unread" to="/posts" />
        <NavLink className="members" to="/members" />
      </nav>
      <nav>
        <NavLink className="notifications unread" to="/notifications" />
        <NavLink className="profile" to="/profile" />
        <NavLink className="logout" to="/" />
      </nav>
    </header>
  )
}
