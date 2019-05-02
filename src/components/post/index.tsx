import React, { FunctionComponent } from 'react'
import moment from 'moment'
import { InView } from 'react-intersection-observer'
import { random } from 'lodash'

import { Post as PostI } from '../../store/models/posts'

import { useActions } from '../../store'

import { formatter } from '../../lib'

import Attachment from '../attachment'
import Avatar from '../avatar'
import UserPreview from '../user-preview'

import users from '../../store/fixtures/users'

import './index.scss'

interface Props {
  post: PostI
}

const [ali] = users

const Post: FunctionComponent<Props> = ({
  post: { attachments, body, created, id, likes, user }
}) => {
  const markAsRead = useActions(actions => actions.posts.markAsRead)
  const toggleLike = useActions(actions => actions.posts.toggleLike)

  const liked = likes.includes(ali)

  return (
    <InView
      as="article"
      className="post"
      onChange={inView =>
        inView &&
        markAsRead({
          post: id,
          user: ali
        })
      }
      threshold={0.25}
      triggerOnce
    >
      <header>
        <UserPreview user={user}>
          <Avatar data={user} />
          <h4>{user.name}</h4>
        </UserPreview>
        <aside>{moment(created).fromNow(true)}</aside>
      </header>
      <div className="body">{formatter(body)}</div>
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
        <span className="comments">{random(0, 10)}</span>
      </footer>
    </InView>
  )
}

export default Post
