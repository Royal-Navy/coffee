import React from 'react'
import { withRouter } from 'react-router-dom'
import { initials, frequencLy } from '../../../helpers'

import {
  Avatar,
  Badge,
  Button,
  TabSet,
  Tab,
} from '@royalnavy/react-component-library'

import {
  IconEmail,
  IconSmartphone,
  IconChat,
  IconWarning,
} from '@royalnavy/icon-library'

import './InfoCard.scss'

import { PaymentList } from '../PaymentList'

export const InfoCard = withRouter(
  ({ subscription, history, handleToggle }) => {
    if (!subscription)
      return (
        <article className="infocard">
          <div className="infocard__placeholder">
            <p>Click on a subscription to view more details.</p>
          </div>
        </article>
      )

    const {
      id,
      active,
      personal: { firstName, lastName, email, contactNumber, handle },
      subscription: { amount, frequency, paymentType, startDate },
      payments,
    } = subscription

    return (
      <article className="infocard">
        <header className="infocard__header">
          <div>
            <Avatar initials={initials(firstName, lastName)} dark />
            <span className="infocard__name">
              {firstName}&nbsp;{lastName}
            </span>
          </div>
          {(active && (
            <Badge color="success" colorVariant="faded">
              Active
            </Badge>
          )) || (
            <Badge color="danger" colorVariant="faded">
              Paused
            </Badge>
          )}
        </header>
        <TabSet className="infocard__body">
          <Tab title="Subscriber Details">
            <section>
              <div className="subscriber-details">
                <span className="infocard__title">Personal</span>
                <ul className="subscriber-details__list">
                  <li className="subscriber-details__list-item">
                    <span className="subscriber-details__email">
                      <IconEmail />
                      {email}
                    </span>
                  </li>
                  <li className="subscriber-details__list-item">
                    <span className="subscriber-details__phone">
                      <IconSmartphone />
                      {contactNumber}
                    </span>
                  </li>
                  <li className="subscriber-details__list-item">
                    <span className="subscriber-details__tweet">
                      <IconChat />
                      {handle}
                    </span>
                  </li>
                </ul>
              </div>
              <footer className="infocard__footer">
                <div className="infocard__title infocard__title--bottom">
                  <span>Subscription</span>
                  <span>
                    <IconWarning />
                    Payments Due
                  </span>
                </div>
                <div className="subscriber-details__payments">
                  <div className="subscriber-details__amount">
                    <span>Subscription Amount</span>
                    <span>
                      &pound;{amount} <span>/{frequencLy(frequency)}</span>
                    </span>
                  </div>
                  <div className="subscriber-details__outstanding">
                    <span>Outstanding Payments</span>
                    <span>&pound;12</span>
                  </div>
                </div>
                <p>
                  {firstName}'s subscription is paid by <em>{paymentType}</em>{' '}
                  every <em>{frequencLy(frequency)}</em>.
                </p>
                <div className="infocard__buttons">
                  <Button
                    variant="secondary"
                    onClick={_ => {
                      handleToggle()
                    }}
                  >
                    {active ? 'Pause' : 'Resume'}
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={_ => history.push(`/subscriptions/update/${id}`)}
                  >
                    Manage Subscriber
                  </Button>
                </div>
              </footer>
            </section>
          </Tab>
          <Tab title="Payment History">
            <section>
              <PaymentList payments={payments} />
            </section>
          </Tab>
        </TabSet>
      </article>
    )
  }
)
