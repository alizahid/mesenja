import React, { FunctionComponent } from 'react'
import { get } from 'lodash'
import moment from 'moment'

import { Feed as FeedI } from '../../store/models/feed'

import { Avatar, UserPreview } from '../../components'
import { useStore } from '../../store'

import './index.scss'

interface Props {
  item: FeedI
}

const FeedBody: FunctionComponent<Props> = ({ item: { team, type, user } }) => {
  switch (type) {
    case 'user_joined':
      return (
        <p>
          <UserPreview user={user}>{user.name}</UserPreview>
          &#160;joined {team.name}.
        </p>
      )

    case 'team_created':
      return (
        <p>
          <UserPreview user={user}>{user.name}</UserPreview>
          &#160;created {team.name}.
        </p>
      )

    default:
      return null
  }
}

const Feed: FunctionComponent = () => {
  const { team } = useStore(state => state.nav)
  const feed = useStore(state => state.feed.feed).filter(
    ({ team: { id } }) => id === get(team, 'id')
  )

  return (
    <main className="feed">
      <h1>Feed</h1>
      {feed.map((item, index) => (
        <article key={index}>
          <UserPreview user={item.user}>
            <Avatar data={item.user} />
          </UserPreview>
          <FeedBody item={item} />
          <span>{moment(item.created).fromNow(true)}</span>
        </article>
      ))}
    </main>
  )
}

export default Feed
