import React from 'react'

import { Posts } from '../../components'
import { useStore } from '../../store'

import './index.scss'

const me = '1'

export default () => {
  const posts = useStore(state => state.posts.posts)

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
      <Posts posts={all} title="Everything else" />
      <Posts posts={tagged} title="Tagged" />
      <Posts posts={mine} title="Mine" />
    </main>
  )
}
