import '@royalnavy/css-framework'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Dashboard } from './pages/Dashboard'
import { Subscriptions } from './pages/Subscriptions'
import { Costs } from './pages/Costs'

import { createAppStore } from './store'

const store = createAppStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Dashboard} exact />
      <Route path="/subscriptions/:id?" component={Subscriptions} />
      <Route path="/costs/:id?" component={Costs} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
