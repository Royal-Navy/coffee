import React from 'react'
import { withRouter } from 'react-router-dom'

import { Avatar, Badge } from '@royalnavy/react-component-library'
import { IconCheckCircle, IconWarning, IconChat } from '@royalnavy/icon-library'

import './RecordList.scss'

export const SubscriptionRecordList = withRouter(
  ({ match, history, subscriptions }) => {
    function isActive(id) {
      return id === match.params.id
    }

    function initials(firstName, lastName) {
      return firstName.charAt(0) + lastName.charAt(0)
    }

    return (
      <section className="record-list record-list--subscription">
        {(subscriptions && (
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
                        &pound;{amount} <span>/{frequency}</span>
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
