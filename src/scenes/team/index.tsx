import React, { FunctionComponent } from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'

import { useActions } from '../../store'

import Feed from '../feed'
import Members from '../members'
import Notifications from '../notifications'
import Post from '../post'
import Posts from '../posts'
import User from '../user'

import './index.scss'

interface Props {
  id: string
}

const Team: FunctionComponent<RouteComponentProps<Props>> = ({ match }) => {
  const {
    params: { id }
  } = match

  const setTeam = useActions(actions => actions.nav.setTeam)

  setTeam(id)

  return (
    <>
      <Route path={`${match.path}`} component={Feed} exact />
      <Route path={`${match.path}/posts`} component={Posts} exact />
      <Route path={`${match.path}/posts/:id`} component={Post} />
      <Route path={`${match.path}/members`} component={Members} />
      <Route path={`${match.path}/notifications`} component={Notifications} />
      <Route path={`${match.path}/users/:id`} component={User} />
    </>
  )
}

export default Team
