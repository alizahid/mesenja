import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'

import * as serviceWorker from './serviceWorker'

import { NavBar } from './components'
import { Home, Posts } from './scenes'
import { store } from './store'

import './index.scss'

ReactDOM.render(
  <StoreProvider store={store}>
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/posts" component={Posts} />
      <Route path="/members" component={Home} />
      <Route path="/notifications" component={Home} />
      <Route path="/profile" component={Home} />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
