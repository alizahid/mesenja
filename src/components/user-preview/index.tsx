import React, { FunctionComponent, useState } from 'react'

import { User } from '../../store/models/users'

import Avatar from '../avatar'
import Modal from '../modal'

import './index.scss'

interface Props {
  user: User
}

const UserPreview: FunctionComponent<Props> = ({ children, user }) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <span className="user" onClick={() => setVisible(true)}>
        {children}
      </span>
      {visible && (
        <Modal onClick={() => setVisible(false)}>
          <div className="user-preview">
            <header>
              <Avatar data={user} />
              <div>
                <h1>{user.name}</h1>
                <p>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </p>
              </div>
            </header>
          </div>
        </Modal>
      )}
    </>
  )
}

export default UserPreview
