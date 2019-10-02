import '@royalnavy/css-framework'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Dashboard } from './pages/Dashboard'
import { Manage } from './pages/Manage'

import { createAppStore } from './store'

const store = createAppStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Dashboard} exact />
      <Route path="/manage/:id?" component={Manage} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
