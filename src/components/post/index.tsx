import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import moment from 'moment'

import { Post as PostI } from '../../store/models/posts'

import { like } from '../../assets'

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
      <Link className="user" to="/members">
        <Avatar data={user} />
        <h4>{user.name}</h4>
        <span>{moment(created).fromNow(true)}</span>
      </Link>
      <Markdown className="body" source={body} />
      {attachments && (
        <div className="attachments">
          {attachments.map((attachment, index) => (
            <Attachment key={index} attachment={attachment} />
          ))}
        </div>
      )}
      <footer className="reactions">
        <a href="/posts">
          <img src={like} alt="" />
          <span>{liked ? liked.length : 0}</span>
        </a>
      </footer>
    </article>
  )
}

export default Post
