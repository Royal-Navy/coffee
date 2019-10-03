import React from 'react'
import { withRouter } from 'react-router-dom'

import { Avatar, Badge } from '@royalnavy/react-component-library'
import { IconCheckCircle, IconWarning, IconChat } from '@royalnavy/icon-library'

// TODO: Remove dependency on other components styles
import '../SubscriptionRecordList/RecordList.scss'

export const CostRecordList = withRouter(
  ({ match, history, subscriptions }) => {
    function isActive(id) {
      return id === match.params.id
    }

    return (
      <section className="record-list record-list--costs">
        {(subscriptions && (
          <table className="record-list__table">
            <tbody>
              {subscriptions.map(({ id }) => {
                return (
                  <tr
                    className={`record-list__row ${isActive(id)}`}
                    onClick={_ => history.push(`/subscriptions/${id}`)}
                  >
                    <td>
                      <div className="record-list__name">
                        <Avatar initials="AR" dark />
                        <span>Adam Rooney</span>
                      </div>
                    </td>
                    <td>
                      <Badge color="danger" colorVariant="faded">
                        Paused
                      </Badge>
                    </td>
                    <td>
                      <span className="record-list__tweet">
                        <IconChat />
                        @adam
                      </span>
                    </td>
                    <td>
                      <span className="record-list__cost">
                        &pound;4 <span>/month</span>
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
