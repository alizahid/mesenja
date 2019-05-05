import React, {
  FunctionComponent,
  FormEvent,
  KeyboardEvent,
  useState
} from 'react'
import TextArea from 'react-autosize-textarea'
import moment from 'moment'

import { Conversation } from '../../store/models/conversations'

import { useActions } from '../../store'

import users from '../../store/fixtures/users'

import './index.scss'

const [ali] = users

interface Props {
  conversation: Conversation
}

const ConversationFooter: FunctionComponent<Props> = ({ conversation }) => {
  const send = useActions(actions => actions.messages.send)

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
    if (!body || !conversation) {
      return
    }

    send({
      body,
      conversation,
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

  return (
    <form className="conversation-footer" onSubmit={onSubmit}>
      <TextArea
        maxRows={4}
        onChange={({ currentTarget: { value } }) => setBody(value)}
        onKeyDown={onKeyDown}
        placeholder="Say something nice"
        value={body}
      />
      <button onClick={reply}>Reply</button>
    </form>
  )
}

export default ConversationFooter
