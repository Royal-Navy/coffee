import React from 'react'

import './Subscriptions.scss'

import { DefaultLayout } from '../../layouts/Default'
import { SubscriberList } from '../../components/presentational/SubscriberList'
import { InfoCard } from '../../components/presentational/InfoCard'

import { IconPerson } from '@royalnavy/icon-library'

export const Subscriptions = props => {
  const {
    match: {
      params: { id },
    },
  } = props

  return (
    <DefaultLayout>
      <section>
        <h1 className="page__heading">
          <i className="page__heading-icon">
            <IconPerson />
          </i>
          <span>Manage Subscriptions</span>
        </h1>
      </section>
      <section>
        <div style={{ float: 'left' }}>
          <SubscriberList />
        </div>
        <div style={{ float: 'right' }}>
          <InfoCard />
        </div>
      </section>
    </DefaultLayout>
  )
}
