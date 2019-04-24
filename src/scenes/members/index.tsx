import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { Avatar } from '../../components'
import { useStore } from '../../store'

import './index.scss'

const Members: FunctionComponent = () => {
  // const { team } = useStore(state => state.nav)
  const users = useStore(state => state.users.users)
  // .filter(
  //   ({ team: { id } }) => id === get(team, 'id')
  // )

  return (
    <main className="members">
      <h1>Members</h1>
      {users.map((user, index) => (
        <article key={index}>
          <Avatar data={user} />
          <Link to="/members">
            <p>{user.name}</p>
            <p>{user.email}</p>
          </Link>
          <span>{user.role}</span>
        </article>
      ))}
    </main>
  )
}

export default Members
