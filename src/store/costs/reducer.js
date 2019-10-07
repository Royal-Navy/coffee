import { ActionTypes } from './types'
import uuid from 'uuid'

const defaultState = {
  items: [
    {
      id: uuid(),
      dateAdded: Date.now(),
      purchase: 'Coffee',
      price: 4.5,
      notes: 'Increased number of meetings caused coffee usage to spike.',
    },
    {
      id: uuid(),
      dateAdded: Date.now(),
      purchase: 'Coffee',
      price: 4.5,
      notes: 'Increased number of meetings caused coffee usage to spike.',
    },
    {
      id: uuid(),
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
    // ...
    case ActionTypes.DELETE_COST:
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload),
      }
    default:
      return state
  }
}
