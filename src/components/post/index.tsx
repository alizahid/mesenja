import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { random, sampleSize } from 'lodash'
import Markdown from 'react-markdown'
import moment from 'moment'

import { Post as PostI } from '../../store/models/posts'

import {
  reaction_cool,
  reaction_laugh,
  reaction_love,
  reaction_sad,
  reaction_thumb_up,
  reaction_thumbs_down
} from '../../assets'

import Attachment from '../attachment'
import Avatar from '../avatar'

import './index.scss'

const reactions = () => {
  const all = [
    {
      icon: reaction_cool,
      label: 'cool'
    },
    {
      icon: reaction_laugh,
      label: 'laugh'
    },
    {
      icon: reaction_love,
      label: 'love'
    },
    {
      icon: reaction_sad,
      label: 'sad'
    },
    {
      icon: reaction_thumb_up,
      label: 'thumb_up'
    },
    {
      icon: reaction_thumbs_down,
      label: 'thumbs_down'
    }
  ]

  return sampleSize(all, random(0, all.length)).map(reaction => ({
    ...reaction,
    count: random(2, 80)
  }))
}

interface Props {
  post: PostI
}

const Post: FunctionComponent<Props> = ({
  post: { attachments, body, created, user }
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
        {reactions().map(({ count, icon }, index) => (
          <a href="/posts" key={index}>
            <img src={icon} alt="" />
            <span>{count}</span>
          </a>
        ))}
      </footer>
    </article>
  )
}

export default Post
