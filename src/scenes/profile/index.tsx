import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { Avatar } from '../../components'

import users from '../../store/fixtures/users'

import './index.scss'

const [ali] = users

const Profille: FunctionComponent = () => {
  return (
    <main className="profile">
      <Avatar data={ali} />
      <h1>{ali.name}</h1>
      <p>{ali.email}</p>
      <h2>Teams</h2>
      <section>
        {ali.teams.map(({ id, name }, index) => (
          <Link key={index} to={`/teams/${id}`}>
            {name}
          </Link>
        ))}
      </section>
    </main>
  )
}

export default Profille
