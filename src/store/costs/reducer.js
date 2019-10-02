import { ActionTypes } from './types'

const defaultState = {
  payments: [],
}

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.CREATE_COST:
      return Object.assign({}, state, {
        ...action.payload,
        /* ... */
        created: Date.now(),
        lastUpdated: Date.now(),
      })
    case ActionTypes.DELETE_COST:
      return Object.assign({}, state, {
        subscribers: state.payments.filter(item => item !== action.payload),
      })
    default:
      return state
  }
}
