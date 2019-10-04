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
        startDate: dayjs(),
      },
      payments: [
        {
          amount: 4,
          date: dayjs(),
          settled: true,
        },
        {
          amount: 6,
          date: dayjs().add(1, 'month'),
          settled: true,
        },
        {
          amount: 4,
          date: dayjs().add(1, 'month'),
          settled: false,
        },
      ],
    },
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
        startDate: dayjs(),
      },
      payments: [
        {
          amount: 4,
          date: dayjs(),
          settled: true,
        },
        {
          amount: 6,
          date: dayjs().add(1, 'month'),
          settled: true,
        },
        {
          amount: 4,
          date: dayjs().add(1, 'month'),
          settled: false,
        },
      ],
    },
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
        startDate: dayjs(),
      },
      payments: [
        {
          amount: 4,
          date: dayjs(),
          settled: true,
        },
        {
          amount: 6,
          date: dayjs().add(1, 'month'),
          settled: true,
        },
        {
          amount: 4,
          date: dayjs().add(1, 'month'),
          settled: false,
        },
      ],
    },
  ],
}

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.CREATE_SUBSCRIBER:
    // ...
    case ActionTypes.DELETE_SUBSCRIBER:
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload),
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
