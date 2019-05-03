import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { Avatar, Error } from '../../components'
import { useStore } from '../../store'

import './index.scss'

interface Props {
  id: string
}

const User: FunctionComponent<RouteComponentProps<Props>> = ({
  match: {
    params: { id }
  }
}) => {
  const user = useStore(state => state.users.users).find(user => user.id === id)

  if (!user) {
    return <Error />
  }

  const { email, name } = user

  return (
    <main className="user">
      <header>
        <Avatar data={user} />
        <div>
          <h1>{name}</h1>
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
      </header>
    </main>
  )
}

export default User
