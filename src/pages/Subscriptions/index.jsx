import React from 'react'

import './Subscriptions.scss'

import { DefaultLayout } from '../../layouts/Default'
import { SubscriberList } from '../../components/presentational/SubscriberList'
import { InfoCard } from '../../components/presentational/InfoCard'

import { Button } from '@royalnavy/react-component-library'
import { IconPerson } from '@royalnavy/icon-library'

export const Subscriptions = props => {
  const {
    match: {
      params: { id },
    },
  } = props

  return (
    <DefaultLayout>
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <h1 className="page__heading">
          <i className="page__heading-icon">
            <IconPerson />
          </i>
          <span>Manage Subscriptions</span>
        </h1>
        <Button variant="primary">Add Subscriber</Button>
      </section>
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '100%', marginRight: '1rem' }}>
          <SubscriberList />
        </div>
        <div>
          <InfoCard />
        </div>
      </section>
    </DefaultLayout>
  )
}
