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

import './index.scss'

interface Props {
  post: PostI
}

const Post: FunctionComponent<Props> = ({
  post: { attachments, body, created, id, liked, user }
}) => {
  const markAsRead = useActions(actions => actions.posts.markAsRead)

  return (
    <InView
      as="article"
      className="post"
      onChange={inView => inView && markAsRead(id)}
      threshold={0.5}
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
        <a className="likes" href="/posts">
          {liked.length}
        </a>
        <a className="comments" href="/posts">
          {random(0, 10)}
        </a>
      </footer>
    </InView>
  )
}

export default Post
