import React, { FunctionComponent } from 'react'
import { get } from 'lodash'

import { Column } from '../../components'
import { useStore } from '../../store'

import users from '../../store/fixtures/users'

import './index.scss'

const [ali] = users

const Posts: FunctionComponent = () => {
  const team = useStore(state => state.nav.team)
  const posts = useStore(state => state.posts.posts).filter(
    ({ team: { id } }) => id === get(team, 'id')
  )

  const all = posts.filter(
    ({ tagged, user: { id } }) => !tagged.includes(ali) && id !== ali.id
  )
  const tagged = posts.filter(({ tagged }) => tagged.includes(ali))
  const mine = posts.filter(({ user: { id } }) => id === ali.id)
  const pinned = posts.filter(({ pinned }) => pinned)

  return (
    <main className="posts">
      {all.length > 0 && <Column posts={all} title="Everything else" />}
      {tagged.length > 0 && <Column posts={tagged} title="Tagged" />}
      {mine.length > 0 && <Column posts={mine} title="Mine" />}
      {pinned.length > 0 && <Column posts={pinned} title="Pinned" />}
    </main>
  )
}

export default Posts
