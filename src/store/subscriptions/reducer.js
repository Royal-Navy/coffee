import { ActionTypes } from './types'

const defaultState = {
  subscribers: [],
}

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.CREATE_SUBSCRIBER:
      return Object.assign({}, state, {
        ...action.payload,
        /* ... */
        created: Date.now(),
        lastUpdated: Date.now(),
      })
    case ActionTypes.DELETE_SUBSCRIBER:
      return Object.assign({}, state, {
        subscribers: state.subscribers.filter(item => item !== action.payload),
      })
    default:
      return state
  }
}
