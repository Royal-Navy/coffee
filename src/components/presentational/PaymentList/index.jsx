import React from 'react'
import dayjs from 'dayjs'

import { Badge } from '@royalnavy/react-component-library'

import './PaymentList.scss'

export const PaymentList = ({ payments }) => {
  console.log(payments)

  return (
    <ol className="payment-list">
      {payments &&
        payments.map(payment => {
          const { amount, date, settled } = payment

          return (
            <li
              className={`payment-list__item ${
                settled ? 'is-settled' : 'is-missed'
              }`}
            >
              <span className="payment-list__amount">
                &pound;{amount}{' '}
                {(settled && (
                  <Badge color="neutral" colorVariant="faded">
                    Balance Settled
                  </Badge>
                )) || (
                  <Badge color="danger" colorVariant="faded">
                    Missed Payment
                  </Badge>
                )}
              </span>
              <span className="payment-list__date">
                {dayjs(date).format('DD/MM/YYYY')}
              </span>
            </li>
          )
        })}
    </ol>
  )
}
