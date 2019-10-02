import React from 'react'

import './Costs.scss'

import { DefaultLayout } from '../../layouts/Default'

export const Costs = props => {
  const {
    match: {
      params: { id },
    },
  } = props

  return (
    <DefaultLayout>
      <section>
        <h1 className="page__heading">Manage Costs</h1>
        <h2 className="page__sub-heading">Manage {id || ''}</h2>
      </section>
    </DefaultLayout>
  )
}
