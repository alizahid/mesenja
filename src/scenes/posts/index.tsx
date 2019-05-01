import React, { FunctionComponent } from 'react'
import { get } from 'lodash'

import { Column } from '../../components'
import { useStore } from '../../store'

import users from '../../store/fixtures/users'

import './index.scss'

const [ali] = users

const Posts: FunctionComponent = () => {
  const { team } = useStore(state => state.nav)
  const posts = useStore(state => state.posts.posts).filter(
    ({ team: { id } }) => id === get(team, 'id')
  )

  const all = posts.filter(
    ({ tagged = [], user: { id } }) => !tagged.includes(ali) && id !== ali.id
  )
  const tagged = posts.filter(({ tagged = [] }) => tagged.includes(ali))
  const mine = posts.filter(({ user: { id } }) => id === ali.id)

  return (
    <main className="posts">
      <Column posts={all} title="Everything else" />
      <Column posts={tagged} title="Tagged" />
      <Column posts={mine} title="Mine" />
    </main>
  )
}

export default Posts
