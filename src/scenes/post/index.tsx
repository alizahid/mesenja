import React, {
  FunctionComponent,
  FormEvent,
  KeyboardEvent,
  useState
} from 'react'
import { RouteComponentProps } from 'react-router-dom'
import TextArea from 'react-autosize-textarea'
import moment from 'moment'

import { Comments, Error, Post } from '../../components'
import { useStoreActions, useStoreState } from '../../store'

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
  const post = useStoreState(state => state.posts.posts).find(
    post => post.id === id
  )
  const comments = useStoreState(state => state.comments.comments).filter(
    ({ post }) => post.id === id
  )

  const addComment = useStoreActions(actions => actions.comments.addComment)

  const [body, setBody] = useState('')

  const onKeyDown = (event: KeyboardEvent) => {
    const { key, metaKey } = event

    if (metaKey && key === 'Enter') {
      reply()
    }
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  const reply = () => {
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
      <form onSubmit={onSubmit}>
        <TextArea
          maxRows={10}
          onChange={({ currentTarget: { value } }) => setBody(value)}
          placeholder="Say something nice"
          value={body}
          onKeyDown={onKeyDown}
        />
        <button onClick={reply}>Reply</button>
      </form>
    </main>
  )
}

export default PostView
