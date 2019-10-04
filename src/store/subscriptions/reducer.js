import { ActionTypes } from './types'
import uuid from 'uuid'

const defaultState = {
  items: [
    {
      id: uuid(),
      active: true,
      personal: {
        firstName: 'Tom',
        lastName: 'Humphris',
        email: 'tom.humphris@royalnavy.io',
        contactNumber: '07515356069',
        handle: '@Tom Humphris',
      },
      subscription: {
        amount: 6,
        frequency: 'weekly',
        paymentType: 'Direct Debit',
        startDate: Date.now(),
      },
      payments: [
        {
          amount: 4,
          date: Date.now(),
          settled: true,
        },
        {
          amount: 6,
          date: Date.now(),
          settled: true,
        },
        {
          amount: 4,
          date: Date.now(),
          settled: false,
        },
      ],
    },
  ],
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
