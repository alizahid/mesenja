import React from 'react'
import Linkify from 'linkifyjs/react'
import replace from 'react-string-replace'

import users from '../store/fixtures/users'

import { UserPreview } from '../components'

export default (body: string) => {
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
              <UserPreview key={index} user={user}>
                @{user.name}
              </UserPreview>
            )
          }
        })}
      </Linkify>
    </p>
  ))
}
