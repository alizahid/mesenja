import React, { FunctionComponent } from 'react'

import { Attachment as AttachmentI } from '../../store/models/posts'

import './index.scss'

interface Props {
  attachment: AttachmentI
}

const Attachment: FunctionComponent<Props> = ({
  attachment: { caption, type, uri }
}) => {
  switch (type) {
    case 'image':
      return (
        <figure className="attachment image">
          <img src={uri} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      )

    case 'link':
      return (
        <a className="attachment link" href={uri} target="_blank">
          {caption && <h4>{caption}</h4>}
          <p>{uri}</p>
        </a>
      )

    default:
      return null
  }
}

export default Attachment
