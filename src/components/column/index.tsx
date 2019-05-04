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

  const { scroll, team } = useStore(state => state.nav)
  const updateScroll = useActions(actions => actions.nav.setScroll)

  useEffect(() => {
    if (column.current) {
      const current = scroll.find(
        scroll => scroll.team.id === get(team, 'id') && scroll.column === title
      )

      if (current) {
        const { position } = current

        column.current.scrollTo({
          top: position
        })
      }
    }

    return () => {
      if (!team) {
        return
      }

      updateScroll({
        team,
        column: title,
        position: get(column, 'current.scrollTop')
      })
    }
  }, [title, scroll, team, updateScroll])

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
