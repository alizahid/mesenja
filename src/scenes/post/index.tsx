import React, { FunctionComponent, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import TextArea from 'react-autosize-textarea'
import moment from 'moment'

import { Comments, Error, Post } from '../../components'
import { useActions, useStore } from '../../store'

import users from '../../store/fixtures/users'

import './index.scss'

interface Props {
  id: string
}

const [ali] = users

const PostView: FunctionComponent<RouteComponentProps<Props>> = ({
  match: {
    params: { id }
  }
}) => {
  const post = useStore(state => state.posts.posts).find(post => post.id === id)
  const comments = useStore(state => state.comments.comments).filter(
    ({ post }) => post.id === id
  )

  const addComment = useActions(actions => actions.comments.addComment)

  const [body, setBody] = useState('')

  const reply = (event: any) => {
    event.preventDefault()

    if (!body || !post) {
      return
    }

    addComment({
      body,
      post,
      created: moment(),
      user: ali
    })

    setBody('')

    setTimeout(() => {
      window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: document.body.scrollHeight
      })
    })
  }

  if (!post) {
    return <Error />
  }

  return (
    <main className="post-view">
      <Post post={post} />
      <Comments comments={comments} />
      <form onSubmit={reply}>
        <TextArea
          maxRows={10}
          onChange={({ currentTarget: { value } }) => setBody(value)}
          placeholder="Say something nice"
          value={body}
        />
        <button onClick={reply}>Reply</button>
      </form>
    </main>
  )
}

export default PostView
