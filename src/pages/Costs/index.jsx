import React from 'react'

import './Costs.scss'

import { DefaultLayout } from '../../layouts/Default'
import CostRecordListContainer from '../../components/containers/CostRecordListContainer'
import CostCardContainer from '../../components/containers/CostCardContainer'
import { HeadingIcon } from '../../components/presentational/HeadingIcon'

import { IconCreditCard } from '@royalnavy/icon-library'

export const Costs = _ => {
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
          <CostRecordListContainer />
        </div>
        <div>
          <CostCardContainer />
        </div>
      </section>
    </DefaultLayout>
  )
}
