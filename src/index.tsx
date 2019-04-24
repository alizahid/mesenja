import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'

import { unregister } from './serviceWorker'

import { NavBar } from './components'
import { Feed, Home, Members, Notifications, Posts } from './scenes'
import { store } from './store'

import './index.scss'

ReactDOM.render(
  <StoreProvider store={store}>
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/feed" component={Feed} />
      <Route path="/posts" component={Posts} />
      <Route path="/members" component={Members} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/profile" component={Home} />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
)

unregister()
