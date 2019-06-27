import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { get, orderBy } from 'lodash'
import moment from 'moment'

import { Feed as FeedI } from '../../store/models/feed'

import { Avatar } from '../../components'
import { useStoreState } from '../../store'

import './index.scss'

interface Props {
  item: FeedI
}

const FeedBody: FunctionComponent<Props> = ({ item: { team, type, user } }) => {
  switch (type) {
    case 'user_joined':
      return (
        <p>
          <Link to={`/teams/${team.id}/users/${user.id}`}>{user.name}</Link>
          &#160;joined {team.name}.
        </p>
      )

    case 'team_created':
      return (
        <p>
          <Link to={`/teams/${team.id}/users/${user.id}`}>{user.name}</Link>
          &#160;created {team.name}.
        </p>
      )

    default:
      return null
  }
}

const Feed: FunctionComponent = () => {
  const team = useStoreState(state => state.nav.team)
  const feed = orderBy(
    useStoreState(state => state.feed.feed).filter(
      ({ team: { id } }) => id === get(team, 'id')
    ),
    'created',
    'desc'
  )

  return (
    <main className="feed">
      <h1>Feed</h1>
      {feed.map((item, index) => (
        <article key={index}>
          <Link to={`/teams/${get(team, 'id')}/users/${item.user.id}`}>
            <Avatar data={item.user} />
          </Link>
          <FeedBody item={item} />
          <aside>{moment(item.created).fromNow(true)}</aside>
        </article>
      ))}
    </main>
  )
}

export default Feed
