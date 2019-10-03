import React from 'react'

import './Costs.scss'

import { DefaultLayout } from '../../layouts/Default'
import { CostRecordList } from '../../components/presentational/CostRecordList'
import { CostCard } from '../../components/presentational/CostCard'
import { HeadingIcon } from '../../components/presentational/HeadingIcon'

import { IconCreditCard } from '@royalnavy/icon-library'

export const Costs = props => {
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
            <IconCreditCard />
          </HeadingIcon>
          <span>Manage Costs</span>
        </h1>
      </section>
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '100%', marginRight: '1rem' }}>
          <CostRecordList />
        </div>
        <div>
          <CostCard />
        </div>
      </section>
    </DefaultLayout>
  )
}
