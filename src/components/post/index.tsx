import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { InView } from 'react-intersection-observer'
import { get } from 'lodash'
import moment from 'moment'

import { Post as PostI } from '../../store/models/posts'

import { useActions, useStore } from '../../store'

import Attachment from '../attachment'
import Avatar from '../avatar'
import Body from '../body'

import users from '../../store/fixtures/users'

import './index.scss'

interface Props {
  post: PostI
}

const [ali] = users

const Post: FunctionComponent<Props> = ({
  post: { attachments, body, created, id, likes, seen, user }
}) => {
  const team = useStore(state => state.nav.team)
  const comments = useStore(state => state.comments.comments).filter(
    ({ post }) => post.id === id
  )

  const markAsRead = useActions(actions => actions.posts.markAsRead)
  const toggleLike = useActions(actions => actions.posts.toggleLike)

  const commented = comments.find(({ user }) => user.id === ali.id)
  const liked = likes.includes(ali)
  const viewed = seen.includes(ali)

  return (
    <InView
      as="article"
      className={`post ${viewed ? 'viewed' : ''}`}
      onChange={inView =>
        inView &&
        markAsRead({
          post: id,
          user: ali
        })
      }
      threshold={0.4}
      triggerOnce
    >
      <header>
        <Link to={`/teams/${get(team, 'id')}/users/${user.id}`}>
          <Avatar data={user} />
          <h4>{user.name}</h4>
        </Link>
        <aside>{moment(created).fromNow(true)}</aside>
      </header>
      <Body body={body} />
      {attachments.length > 0 && (
        <div className="attachments">
          {attachments.map((attachment, index) => (
            <Attachment key={index} attachment={attachment} />
          ))}
        </div>
      )}
      <footer>
        <span
          className={`likes ${liked ? 'liked' : ''}`}
          onClick={() =>
            toggleLike({
              post: id,
              user: ali
            })
          }
        >
          {likes.length}
        </span>
        <Link
          className={`comments ${commented ? 'commented' : ''}`}
          to={`/teams/${get(team, 'id')}/posts/${id}`}
        >
          {comments.length}
        </Link>
      </footer>
    </InView>
  )
}

export default Post
