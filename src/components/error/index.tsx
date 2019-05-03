import React, { FunctionComponent } from 'react'

import './index.scss'

interface Props {
  title?: string
  message?: string
}

const Error: FunctionComponent<Props> = ({ title, message }) => {
  return (
    <main className="error">
      <h1>{title || '404'}</h1>
      <p>
        {message ||
          `Like Bono, we couldn't find what you were looking for. Try again later?`}
      </p>
    </main>
  )
}

export default Error
