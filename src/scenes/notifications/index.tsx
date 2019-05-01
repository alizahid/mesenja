import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { get } from 'lodash'
import moment from 'moment'

import { Notification as NotificationI } from '../../store/models/notifications'

import { Avatar, UserPreview } from '../../components'
import { useActions, useStore } from '../../store'

import './index.scss'

interface Props {
  notification: NotificationI
}

const NotificationBody: FunctionComponent<Props> = ({
  notification: { team, type, user }
}) => {
  switch (type) {
    case 'tag':
      return (
        <p>
          <UserPreview user={user}>{user.name}</UserPreview>
          <span>&#160;tagged you in a&#160;</span>
          <Link to={`/teams/${team.id}/posts`}>post</Link>.
        </p>
      )

    default:
      return null
  }
}

const Notifications: FunctionComponent = () => {
  const markAsRead = useActions(state => state.notifications.markAsRead)

  const { team } = useStore(state => state.nav)

  const notifications = useStore(
    state => state.notifications.notifications
  ).filter(({ team: { id } }) => id === get(team, 'id'))

  return (
    <main className="notifications">
      <h1>Notifications</h1>
      {notifications.map((notification, index) => (
        <article
          className={notification.read ? 'read' : 'unread'}
          key={index}
          onClick={() => markAsRead(notification.id)}
        >
          <UserPreview user={notification.user}>
            <Avatar data={notification.user} />
          </UserPreview>
          <NotificationBody notification={notification} />
          <aside>{moment(notification.created).fromNow(true)}</aside>
        </article>
      ))}
    </main>
  )
}

export default Notifications
