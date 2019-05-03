import React from 'react'
import { Link } from 'react-router-dom'
import { get } from 'lodash'
import Linkify from 'linkifyjs/react'
import replace from 'react-string-replace'

import { useStore } from '../store'

import users from '../store/fixtures/users'

export default (body: string) => {
  const team = useStore(state => state.nav.team)

  return body.split('\n').map((text, index) => (
    <p key={index}>
      <Linkify
        options={{
          target: '_blank'
        }}
      >
        {replace(text, /{user:([0-9A-Za-z_-]+)}/g, (id, index) => {
          const user = users.find(user => user.id === id)

          if (user) {
            return (
              <Link
                to={`/teams/${get(team, 'id')}/users/${user.id}`}
                key={index}
              >
                @{user.name}
              </Link>
            )
          }
        })}
      </Linkify>
    </p>
  ))
}
