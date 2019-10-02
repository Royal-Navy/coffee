import React from 'react'

import {
  Avatar,
  Badge,
  Button,
  TabSet,
  Tab,
} from '@royalnavy/react-component-library'

import './InfoCard.scss'

export const InfoCard = props => {
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
              <span className="subscriber-details__title">Personal</span>
              <ul className="subscriber-details__list">
                <li>
                  <span className="subscriber-details__email">
                    charli.roberts@mod.gov.uk
                  </span>
                </li>
                <li>
                  <span className="subscriber-details__phone">
                    0778 0548 372
                  </span>
                </li>
                <li>
                  <span className="subscriber-details__tweet">@charli</span>
                </li>
              </ul>
            </div>
            <footer className="infocard__footer">
              <Button variant="secondary">Pause</Button>
              <Button variant="secondary">Manage Subscriber</Button>
            </footer>
          </section>
        </Tab>
        <Tab title="Payment History">
          <section>
            <ol className="payment-list">
              <li className="payment-list__item">
                <span className="payment-list__amount">£4</span>
                <span className="payment-list__date">01/08/2019</span>
              </li>
            </ol>
          </section>
        </Tab>
      </TabSet>
    </article>
  )
}
