import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { reducer as subscriptions } from './subscriptions'
import { reducer as payments } from './payments'

const rootReducer = combineReducers({
  subscriptions,
  payments,
})

export function createAppStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  )

  return store
}
