import React from 'react'

import './Subscriptions.scss'

import { DefaultLayout } from '../../layouts/Default'
import { RecordList } from '../../components/presentational/RecordList'
import { InfoCard } from '../../components/presentational/InfoCard'
import { HeadingIcon } from '../../components/presentational/HeadingIcon'

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
          <HeadingIcon>
            <IconPerson />
          </HeadingIcon>
          <span>Manage Subscriptions</span>
        </h1>
        <Button variant="primary">Add Subscriber</Button>
      </section>
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '100%', marginRight: '1rem' }}>
          <RecordList />
        </div>
        <div>
          <InfoCard />
        </div>
      </section>
    </DefaultLayout>
  )
}
