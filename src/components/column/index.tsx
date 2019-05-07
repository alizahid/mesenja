import React, { FunctionComponent, useEffect, useRef } from 'react'
import { get } from 'lodash'
import List from 'react-list'

import { Post as PostI } from '../../store/models/posts'

import { useActions, useStore } from '../../store'

import Post from '../post'

import './index.scss'

interface Props {
  posts: PostI[]
  title: string
  type: string
}

const Column: FunctionComponent<Props> = ({ posts, title, type }) => {
  const column = useRef<HTMLInputElement>(null)

  const { scroll, team } = useStore(state => state.nav)
  const updateScroll = useActions(actions => actions.nav.setScroll)

  useEffect(() => {
    if (column.current) {
      const current = scroll.find(
        scroll => scroll.team.id === get(team, 'id') && scroll.column === type
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
        column: type,
        position: get(column, 'current.scrollTop')
      })
    }
  }, [type, scroll, team, updateScroll])

  return (
    <section className="posts">
      <h2 className={type}>{title}</h2>
      <section ref={column}>
        <List
          itemRenderer={index => <Post key={index} post={posts[index]} />}
          length={posts.length}
        />
      </section>
    </section>
  )
}

export default Column
