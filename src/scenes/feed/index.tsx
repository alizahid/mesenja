import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { get } from 'lodash'
import moment from 'moment'

import { Feed as FeedI } from '../../store/models/feed'

import { Avatar } from '../../components'
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
          <Link to="/members">{user.name}</Link> joined {team.name}.
        </p>
      )

    case 'team_created':
      return (
        <p>
          <Link to="/members">{user.name}</Link> created {team.name}.
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
          <Link to="/members">
            <Avatar data={item.user} />
          </Link>
          <FeedBody item={item} />
          <span>{moment(item.created).fromNow(true)}</span>
        </article>
      ))}
    </main>
  )
}

export default Feed
