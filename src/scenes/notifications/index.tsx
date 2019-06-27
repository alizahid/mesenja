import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { get } from 'lodash'
import moment from 'moment'

import { Notification as NotificationI } from '../../store/models/notifications'

import { Avatar } from '../../components'
import { useStoreActions, useStoreState } from '../../store'

import './index.scss'

interface Props {
  notification: NotificationI
}

const NotificationBody: FunctionComponent<Props> = ({
  notification: { target, team, type, user }
}) => {
  switch (type) {
    case 'tag':
      return (
        <p>
          <Link to={`/teams/${team.id}/users/${user.id}`}>{user.name}</Link>
          <span>&#160;tagged you in a&#160;</span>
          <Link to={`/teams/${team.id}/posts/${target.id}`}>post</Link>.
        </p>
      )

    default:
      return null
  }
}

const Notifications: FunctionComponent = () => {
  const team = useStoreState(state => state.nav.team)
  const notifications = useStoreState(
    state => state.notifications.notifications
  ).filter(({ team: { id } }) => id === get(team, 'id'))

  const markAsRead = useStoreActions(state => state.notifications.markAsRead)

  return (
    <main className="notifications">
      <h1>Notifications</h1>
      {notifications.map((notification, index) => (
        <article
          className={notification.read ? 'read' : 'unread'}
          key={index}
          onClick={() => markAsRead(notification.id)}
        >
          <Link to={`/teams/${get(team, 'id')}/users/${notification.user.id}`}>
            <Avatar data={notification.user} />
          </Link>
          <NotificationBody notification={notification} />
          <aside>{moment(notification.created).fromNow(true)}</aside>
        </article>
      ))}
    </main>
  )
}

export default Notifications
