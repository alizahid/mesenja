import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'

import { unregister } from './serviceWorker'

import { Error, NavBar } from './components'
import { moment } from './lib'
import { Profile, Team } from './scenes'
import { store } from './store'

import './index.scss'

moment.setup()

ReactDOM.render(
  <StoreProvider store={store}>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route
          path="/"
          exact
          render={() => <div className="hello">hello</div>}
        />
        <Route path="/teams/:id" component={Team} />
        <Route path="/profile" component={Profile} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
)

unregister()
