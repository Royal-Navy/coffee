import React from 'react'
import dayjs from 'dayjs'
import { formatCurrency } from '../../../helpers'
import uuid from 'uuid'

import { Button } from '@royalnavy/react-component-library'

// TODO: Remove dependency on other components styles
import '../SubscriptionRecordList/RecordList.scss'

export const CostRecordList = ({ costs, handleDelete }) => {
  return (
    <section className="record-list record-list--costs">
      {(costs && costs.length > 0 && (
        <table className="record-list__table">
          <tbody>
            {costs.map(({ id, dateAdded, purchase, price, notes }) => {
              return (
                <tr className="record-list__row" key={uuid()}>
                  <td>
                    <div className="record-list__date">
                      <span>{dayjs(dateAdded).format('DD/MM/YYYY')}</span>
                    </div>
                  </td>
                  <td>
                    <div className="record-list__purchase">
                      <span>{purchase}</span>
                    </div>
                  </td>
                  <td>
                    <div className="record-list__price">
                      <span>-&nbsp;{formatCurrency(price)}</span>
                    </div>
                  </td>
                  <td>
                    <div className="record-list__notes">
                      <span>{notes || '-'}</span>
                    </div>
                  </td>
                  <td>
                    <div className="record-list__btn-delete">
                      <Button
                        onClick={() => {
                          handleDelete(id)
                        }}
                        variant="primary"
                        color="danger"
                        size="small"
                      >
                        Remove
                      </Button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )) || (
        <p className="record-list__empty">Sorry, we couldn't find any costs.</p>
      )}
    </section>
  )
}
