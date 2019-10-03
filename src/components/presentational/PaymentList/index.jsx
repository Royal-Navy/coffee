import React from 'react'

import { Badge } from '@royalnavy/react-component-library'

import './PaymentList.scss'

export const PaymentList = props => {
  return (
    <ol className="payment-list">
      <li className="payment-list__item is-settled">
        <span className="payment-list__amount">
          &pound;4{' '}
          <Badge color="neutral" colorVariant="faded">
            Balance Settled
          </Badge>
        </span>
        <span className="payment-list__date">01/08/2019</span>
      </li>
      <li className="payment-list__item is-missed">
        <span className="payment-list__amount">
          &pound;0{' '}
          <Badge color="danger" colorVariant="faded">
            Missed Payment
          </Badge>
        </span>
        <span className="payment-list__date">01/08/2019</span>
      </li>
      <li className="payment-list__item">
        <span className="payment-list__amount">£4</span>
        <span className="payment-list__date">01/08/2019</span>
      </li>
    </ol>
  )
}
