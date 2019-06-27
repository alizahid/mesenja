import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'
// @ts-ignore
import ScrollToTop from 'react-router-scroll-top'

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
      <ScrollToTop>
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
      </ScrollToTop>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
)

unregister()
