import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import moment from 'moment'

import { Post as PostI } from '../../store/models/posts'

import Attachment from '../attachment'
import Avatar from '../avatar'

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
        <Link className="user" to="/members">
          <Avatar data={user} />
          <h4>{user.name}</h4>
        </Link>
        <span>{moment(created).fromNow(true)}</span>
      </header>
      <Markdown className="body" source={body} />
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
          5
        </a>
      </footer>
    </article>
  )
}

export default Post
