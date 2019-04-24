import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
// import { get } from 'lodash'
import moment from 'moment'

import { Notification as NotificationI } from '../../store/models/notifications'

import { Avatar } from '../../components'
import { useStore } from '../../store'

import './index.scss'

interface Props {
  notification: NotificationI
}

const NotificationBody: FunctionComponent<Props> = ({
  notification: { type, user }
}) => {
  switch (type) {
    case 'tag':
      return (
        <p>
          <Link to="/members">{user.name}</Link>
          <span>tagged you in a</span>
          <Link to="/posts">post</Link>.
        </p>
      )

    default:
      return null
  }
}

const Notifications: FunctionComponent = () => {
  // const { team } = useStore(state => state.nav)
  const notifications = useStore(state => state.notifications.notifications)
  // .filter(
  //   ({ team: { id } }) => id === get(team, 'id')
  // )

  return (
    <main className="notifications">
      <h1>Notifications</h1>
      {notifications.map((notification, index) => (
        <article className={notification.read ? 'read' : 'unread'} key={index}>
          <Link to="/members">
            <Avatar data={notification.user} />
          </Link>
          <NotificationBody notification={notification} />
          <span>{moment(notification.created).fromNow(true)}</span>
        </article>
      ))}
    </main>
  )
}

export default Notifications
