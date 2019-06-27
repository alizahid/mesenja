import React, { FunctionComponent } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { get, sortBy } from 'lodash'

import { Comment } from '../../store/models/comments'

import { useStoreState } from '../../store'

import Avatar from '../avatar'
import Body from '../body'

import './index.scss'

interface Props {
  comments: Comment[]
}

const Comments: FunctionComponent<Props> = ({ comments }) => {
  const team = useStoreState(state => state.nav.team)

  return (
    <section className="comments">
      {sortBy(comments, 'created').map((comment, index) => (
        <article key={index}>
          <header>
            <Link to={`/teams/${get(team, 'id')}/users/${comment.user.id}`}>
              <Avatar data={comment.user} />
              <h4>{comment.user.name}</h4>
            </Link>
            <aside>{moment(comment.created).fromNow(true)}</aside>
          </header>
          <Body body={comment.body} />
        </article>
      ))}
    </section>
  )
}

export default Comments
