import React from 'react'
import { withRouter } from 'react-router-dom'

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

export const InfoCard = withRouter(({ history, id }) => {
  return (
    <article className="infocard">
      <header className="infocard__header">
        <div>
          <Avatar initials="TH" dark />
          <span className="infocard__name">Tom Humphris</span>
        </div>
        <Badge color="success" colorVariant="faded">
          Active
        </Badge>
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
                    charli.roberts@mod.gov.uk
                  </span>
                </li>
                <li className="subscriber-details__list-item">
                  <span className="subscriber-details__phone">
                    <IconSmartphone />
                    0778 0548 372
                  </span>
                </li>
                <li className="subscriber-details__list-item">
                  <span className="subscriber-details__tweet">
                    <IconChat />
                    @charli
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
                    &pound;4 <span>/week</span>
                  </span>
                </div>
                <div className="subscriber-details__outstanding">
                  <span>Outstanding Payments</span>
                  <span>&pound;12</span>
                </div>
              </div>
              <p>
                Charli's subscription is paid by <em>Direct Debit</em> every{' '}
                <em>Week</em>.
              </p>
              <div className="infocard__buttons">
                <Button variant="secondary">Pause</Button>
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
            <PaymentList />
          </section>
        </Tab>
      </TabSet>
    </article>
  )
})
