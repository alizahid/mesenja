import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { get } from 'lodash'
import Linkify from 'linkifyjs/react'
import replace from 'react-string-replace'
import clsx from 'clsx'
// @ts-ignore
import emojis from 'is-only-emojis'

import { useStoreState } from '../../store'

import users from '../../store/fixtures/users'

import './index.scss'

interface Props {
  body: string
}

const Body: FunctionComponent<Props> = ({ body }) => {
  const team = useStoreState(state => state.nav.team)

  return (
    <div className={clsx('body', emojis(body) && 'emojis')}>
      {body
        .split('\n')
        .filter(Boolean)
        .map((text, index) => (
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
        ))}
    </div>
  )
}

export default Body
