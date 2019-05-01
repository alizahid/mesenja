import React, { FunctionComponent } from 'react'
import moment from 'moment'
import { random } from 'lodash'

import { Post as PostI } from '../../store/models/posts'

import { formatter } from '../../lib'

import Attachment from '../attachment'
import Avatar from '../avatar'
import UserPreview from '../user-preview'

import './index.scss'

interface Props {
  post: PostI
}

const Post: FunctionComponent<Props> = ({
  post: { attachments, body, created, liked, user }
}) => {
  return (
    <article className="post">
      <header>
        <UserPreview user={user}>
          <Avatar data={user} />
          <h4>{user.name}</h4>
        </UserPreview>
        <aside>{moment(created).fromNow(true)}</aside>
      </header>
      <div className="body">{formatter(body)}</div>
      {attachments && (
        <div className="attachments">
          {attachments.map((attachment, index) => (
            <Attachment key={index} attachment={attachment} />
          ))}
        </div>
      )}
      <footer>
        <a className="likes" href="/posts">
          {liked ? liked.length : 0}
        </a>
        <a className="comments" href="/posts">
          {random(0, 10)}
        </a>
      </footer>
    </article>
  )
}

export default Post
