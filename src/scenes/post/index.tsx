import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { Error, Post } from '../../components'
import { useStore } from '../../store'

import './index.scss'

interface Props {
  id: string
}

const PostView: FunctionComponent<RouteComponentProps<Props>> = ({
  match: {
    params: { id }
  }
}) => {
  const post = useStore(state => state.posts.posts).find(post => post.id === id)

  if (!post) {
    return <Error />
  }

  return (
    <main className="post-view">
      <Post post={post} />
    </main>
  )
}

export default PostView
