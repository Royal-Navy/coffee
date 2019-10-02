import React from 'react'

import './Subscriptions.scss'

import { DefaultLayout } from '../../layouts/Default'
import { SubscriberList } from '../../components/presentational/SubscriberList'
import { InfoCard } from '../../components/presentational/InfoCard'

export const Subscriptions = props => {
  const {
    match: {
      params: { id },
    },
  } = props

  return (
    <DefaultLayout>
      <section>
        <h1 className="page__heading">Manage Subscriptions</h1>
        <h2 className="page__sub-heading">Manage {id || ''}</h2>
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
