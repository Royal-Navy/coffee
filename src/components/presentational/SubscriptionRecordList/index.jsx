import React from 'react'
import { withRouter } from 'react-router-dom'
import { initials, frequencLy } from '../../../helpers'
import uuid from 'uuid'

import { Avatar, Badge } from '@royalnavy/react-component-library'
import { IconCheckCircle, IconChat } from '@royalnavy/icon-library'

import './RecordList.scss'

export const SubscriptionRecordList = withRouter(
  ({ match, history, subscriptions }) => {
    function isActive(id) {
      return id === match.params.id
    }

    return (
      <section className="record-list record-list--subscription">
        {(subscriptions && subscriptions.length > 0 && (
          <table className="record-list__table">
            <tbody>
              {subscriptions.map(({ id, active, personal, subscription }) => {
                const { firstName, lastName, handle } = personal
                const { amount, frequency } = subscription

                return (
                  <tr
                    className={`record-list__row ${
                      isActive(id) ? 'is-active' : ''
                    }`}
                    onClick={_ => history.push(`/subscriptions/${id}`)}
                    key={uuid()}
                  >
                    <td>
                      <div className="record-list__name">
                        <Avatar initials={initials(firstName, lastName)} dark />
                        <span>
                          {firstName}&nbsp;{lastName}
                        </span>
                      </div>
                    </td>
                    <td>
                      {(active && (
                        <Badge color="success" colorVariant="faded">
                          Active
                        </Badge>
                      )) || (
                        <Badge color="danger" colorVariant="faded">
                          Paused
                        </Badge>
                      )}
                    </td>
                    <td>
                      <span className="record-list__tweet">
                        <IconChat />
                        {handle}
                      </span>
                    </td>
                    <td>
                      <span className="record-list__cost">
                        &pound;{amount} <span>/{frequencLy(frequency)}</span>
                      </span>
                    </td>
                    <td>
                      <span className="record-list__status is-paid">
                        <IconCheckCircle />
                        Paid Up
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )) || (
          <p className="record-list__empty">
            Sorry, we couldn't find any subscriptions.
          </p>
        )}
      </section>
    )
  }
)
