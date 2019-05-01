import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'

import { unregister } from './serviceWorker'

import { NavBar } from './components'
import { moment } from './lib'
import { Profile, Team } from './scenes'
import { store } from './store'

import './index.scss'

moment.setup()

ReactDOM.render(
  <StoreProvider store={store}>
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact render={() => <div className="hello">hello</div>} />
      <Route path="/teams/:id" component={Team} />
      <Route path="/profile" component={Profile} />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
)

unregister()
