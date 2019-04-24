import React, { FunctionComponent } from 'react'
import Identicon from 'identicon.js'
import sha from 'sha.js'

import { Team as TeamI } from '../../store/models/teams'
import { User as UserI } from '../../store/models/users'

import './index.scss'

interface Props {
  data: TeamI | UserI
}

const Avatar: FunctionComponent<Props> = ({ data: { id, name } }) => {
  const hash = sha('sha256')
    .update(id)
    .digest('hex')

  const image = new Identicon(hash, {
    format: 'svg',
    margin: 0,
    size: 200
  }).toString()

  const source = `data:image/svg+xml;base64,${image}`

  return <img className="avatar" src={source} alt={name} />
}

export default Avatar
