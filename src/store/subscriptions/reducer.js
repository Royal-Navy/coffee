import { ActionTypes } from './types'
import uuid from 'uuid'
import dayjs from 'dayjs'

const defaultState = {
  items: [
    {
      id: uuid(),
      active: false,
      personal: {
        firstName: 'Charli',
        lastName: 'Roberts',
        email: 'charli.roberts@mod.gov.uk',
        contactNumber: '0778 9548 372',
        handle: '@charli',
      },
      subscription: {
        amount: 6,
        frequency: 'weekly',
        paymentType: 'Direct Debit',
        startDate: dayjs().format('DD/MM/YYYY'),
      },
      payments: [
        {
          amount: 4,
          date: dayjs(),
          settled: true,
        },
        {
          amount: 6,
          date: dayjs()
            .add(1, 'month')
            .format('DD/MM/YYYY'),
          settled: true,
        },
        {
          amount: 4,
          date: dayjs()
            .add(1, 'month')
            .format('DD/MM/YYYY'),
          settled: false,
        },
      ],
    },
  ],
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
    payments: [],
  }
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
