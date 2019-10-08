import { ActionTypes } from './types'
import uuid from 'uuid'
import dayjs from 'dayjs'

const firstNames = ['Tom', 'Kate', 'Mark', 'Billy', 'Steve', 'Michelle']

const payments = () => {
  return Array(4)
    .fill()
    .map(_ => ({
      amount: Math.round(Math.random() * 10),
      date: dayjs(),
      settled: Math.random() >= 0.5,
    }))
}

function subscription(
  id,
  {
    firstName,
    lastName,
    email,
    contactNumber,
    handle,
    amount,
    frequency,
    paymentType,
    startDate,
  }
) {
  return {
    id: id || uuid(),
    active: true,
    personal: {
      firstName,
      lastName,
      email,
      contactNumber,
      handle,
    },
    subscription: {
      amount,
      frequency,
      paymentType,
      startDate,
    },
    payments: payments(),
  }
}

const defaultState = {
  items: Array(2)
    .fill()
    .map(_ =>
      subscription(null, {
        firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
        lastName: 'Bloggs',
        email: 'charli.roberts@mod.gov.uk',
        contactNumber: '0778 9548 372',
        handle: '@charli',
        amount: Math.round(Math.random() * 10),
        frequency: 'weekly',
        paymentType: 'Direct Debit',
        startDate: dayjs().format('DD/MM/YYYY'),
      })
    ),
}

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.CREATE_SUBSCRIBER:
      return {
        ...state,
        items: [...state.items, ...[subscription(null, action.payload)]],
      }
    case ActionTypes.DELETE_SUBSCRIBER:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      }
    case ActionTypes.UPDATE_SUBSCRIBER:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? subscription(action.payload.id, action.payload.data)
            : item
        ),
      }
    case ActionTypes.TOGGLE_ACTIVE:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload ? { ...item, active: !item.active } : item
        ),
      }
    default:
      return state
  }
}
