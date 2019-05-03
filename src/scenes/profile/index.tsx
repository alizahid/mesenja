import React, { FunctionComponent } from 'react'

import { Avatar } from '../../components'

import users from '../../store/fixtures/users'

import './index.scss'

const [ali] = users

const Profille: FunctionComponent = () => {
  return (
    <main className="profile">
      <header>
        <Avatar data={ali} />
        <div>
          <h1>{ali.name}</h1>
          <p>
            <a href={`mailto:${ali.email}`}>{ali.email}</a>
          </p>
        </div>
      </header>
    </main>
  )
}

export default Profille
