import React, { FunctionComponent, useEffect, useRef } from 'react'
import { get } from 'lodash'

import { Post as PostI } from '../../store/models/posts'

import { useActions, useStore } from '../../store'

import Post from '../post'

import './index.scss'

interface Props {
  posts: PostI[]
  title: string
}

const Column: FunctionComponent<Props> = ({ posts, title }) => {
  const column = useRef<HTMLInputElement>(null)

  const scroll = useStore(state => state.nav.scroll)
  const updateScroll = useActions(actions => actions.nav.setScroll)

  useEffect(() => {
    if (column.current) {
      const position = scroll[title]

      column.current.scrollTo({
        top: position
      })
    }

    return () => {
      updateScroll({
        column: title,
        position: get(column, 'current.scrollTop')
      })
    }
  }, [title, scroll, updateScroll])

  return (
    <section className="posts">
      <h2>{title}</h2>
      <section ref={column}>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </section>
    </section>
  )
}

export default Column
