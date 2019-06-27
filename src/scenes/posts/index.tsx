import React, { FunctionComponent } from 'react'
import { get, orderBy } from 'lodash'

import { Column } from '../../components'
import { useStoreState } from '../../store'

import users from '../../store/fixtures/users'

import './index.scss'

const [ali] = users

const Posts: FunctionComponent = () => {
  const team = useStoreState(state => state.nav.team)
  const posts = orderBy(
    useStoreState(state => state.posts.posts).filter(
      ({ team: { id } }) => id === get(team, 'id')
    ),
    'created',
    'desc'
  )

  const all = posts.filter(
    ({ tagged, user: { id } }) => !tagged.includes(ali) && id !== ali.id
  )
  const tagged = posts.filter(({ tagged }) => tagged.includes(ali))
  const mine = posts.filter(({ user: { id } }) => id === ali.id)
  const pinned = posts.filter(({ pinned }) => pinned)

  return (
    <main className="posts">
      {all.length > 0 && (
        <Column posts={all} title="Everything else" type="all" />
      )}
      {tagged.length > 0 && (
        <Column posts={tagged} title="Tagged" type="tagged" />
      )}
      {mine.length > 0 && <Column posts={mine} title="Mine" type="mine" />}
      {pinned.length > 0 && (
        <Column posts={pinned} title="Pinned" type="pinned" />
      )}
    </main>
  )
}

export default Posts
