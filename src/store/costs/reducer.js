import { ActionTypes } from './types'
import dayjs from 'dayjs'
import uuid from 'uuid'

const defaultState = {
  items: Array(3)
    .fill()
    .map(_ =>
      cost({
        purchase: 'Coffee',
        price: Math.round(Math.random() * 10),
        notes: 'Increased number of meetings caused coffee usage to spike.',
      })
    ),
}

function cost({ purchase, price, notes }) {
  return {
    id: uuid(),
    dateAdded: dayjs().format('DD/MM/YYYY'),
    purchase,
    price,
    notes,
  }
}

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.CREATE_COST:
      return {
        ...state,
        items: [...state.items, ...[cost(action.payload)]],
      }
    case ActionTypes.DELETE_COST:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      }
    default:
      return state
  }
}
