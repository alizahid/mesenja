import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { InView } from 'react-intersection-observer'
import { get } from 'lodash'
import clsx from 'clsx'
import moment from 'moment'

import { Post as PostI } from '../../store/models/posts'

import { useStoreActions, useStoreState } from '../../store'

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
  const team = useStoreState(state => state.nav.team)
  const comments = useStoreState(state => state.comments.comments).filter(
    ({ post }) => post.id === id
  )

  const markAsRead = useStoreActions(actions => actions.posts.markAsRead)
  const toggleLike = useStoreActions(actions => actions.posts.toggleLike)

  const commented = comments.find(({ user }) => user.id === ali.id)
  const liked = likes.includes(ali)
  const viewed = seen.includes(ali)

  return (
    <InView
      as="article"
      className={clsx('post', viewed && 'viewed')}
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
          className={clsx('likes', liked && 'liked')}
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
          className={clsx('comments', commented && 'commented')}
          to={`/teams/${get(team, 'id')}/posts/${id}`}
        >
          {comments.length}
        </Link>
      </footer>
    </InView>
  )
}

export default Post
