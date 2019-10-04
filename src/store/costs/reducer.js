import { ActionTypes } from './types'

const defaultState = {
  items: [
    {
      dateAdded: Date.now(),
      purchase: 'Coffee',
      price: 4.5,
      notes: 'Increased number of meetings caused coffee usage to spike.',
    },
  ],
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
