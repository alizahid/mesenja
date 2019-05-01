import React, { FunctionComponent } from 'react'

import { Team } from '../../store/models/teams'
import { User } from '../../store/models/users'

import { Avatar, UserPreview } from '../../components'
import { useStore } from '../../store'

import './index.scss'

const getRole = (user: User, team: undefined | Team) => {
  const role = user.roles.find(role => role.team === team)

  if (role) {
    return role.role
  }
}

const Members: FunctionComponent = () => {
  const { team } = useStore(state => state.nav)
  const users = useStore(state => state.users.users).filter(
    ({ teams }) => team && teams.includes(team)
  )

  return (
    <main className="members">
      <h1>Members</h1>
      {users.map((user, index) => (
        <article key={index}>
          <UserPreview user={user}>
            <Avatar data={user} />
            <div>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          </UserPreview>
          <aside>{getRole(user, team)}</aside>
        </article>
      ))}
    </main>
  )
}

export default Members
