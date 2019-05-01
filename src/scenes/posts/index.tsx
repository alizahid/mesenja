import React, { FunctionComponent } from 'react'
import { get } from 'lodash'

import { Column } from '../../components'
import { useStore } from '../../store'

import './index.scss'

const Posts: FunctionComponent = () => {
  const me = '1'
  const { team } = useStore(state => state.nav)
  const posts = useStore(state => state.posts.posts).filter(
    ({ team: { id } }) => id === get(team, 'id')
  )

  const all = posts.filter(
    ({ tagged = [], user: { id } }) =>
      !tagged.map(({ id }) => id).includes(me) && id !== me
  )
  const tagged = posts.filter(({ tagged = [] }) =>
    tagged.map(({ id }) => id).includes(me)
  )
  const mine = posts.filter(({ user: { id } }) => id === me)

  return (
    <main className="posts">
      <Column posts={all} title="Everything else" />
      <Column posts={tagged} title="Tagged" />
      <Column posts={mine} title="Mine" />
    </main>
  )
}

export default Posts
