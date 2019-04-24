import React, { FunctionComponent } from 'react'

import { Post as PostI } from '../../store/models/posts'

import Post from '../post'

import './index.scss'

interface Props {
  posts: PostI[]
  title: string
}

const Column: FunctionComponent<Props> = ({ posts, title }) => {
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

export default Column
