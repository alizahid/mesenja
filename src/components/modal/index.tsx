import { FunctionComponent, useEffect } from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

interface Props {
  onClick: any
}

const Modal: FunctionComponent<Props> = ({ children, onClick }) => {
  const modal = document.createElement('div')

  modal.id = 'modal'
  modal.onclick = event => {
    if (event.target === modal && onClick) {
      onClick()
    }
  }

  useEffect(() => {
    document.body.appendChild(modal)

    return () => {
      modal.className = 'closing'

      setTimeout(() => {
        document.body.removeChild(modal)
      }, 100)
    }
  })

  return ReactDOM.createPortal(children, modal)
}

export default Modal
