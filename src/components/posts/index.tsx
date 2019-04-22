import React, { FunctionComponent } from 'react'
import moment from 'moment'

import { Post as PostI } from '../../store/models/posts'

import Post from '../post'

import './index.scss'

interface Props {
  posts: PostI[]
  title: string
}

moment.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'now',
    ss: '%ds',
    m: '1m',
    mm: '%dm',
    h: '1h',
    hh: '%dh',
    d: '1d',
    dd: '%dd',
    M: '1M',
    MM: '%dM',
    y: '1Y',
    yy: '%dY'
  }
})

const Posts: FunctionComponent<Props> = ({ posts, title }) => {
  return (
    <section className="posts">
      <h2>{title}</h2>
      <section>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </section>
    </section>
  )
}

export default Posts
