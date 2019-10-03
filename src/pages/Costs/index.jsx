import React from 'react'

import './Costs.scss'

import { DefaultLayout } from '../../layouts/Default'

import { IconPerson } from '@royalnavy/icon-library'

export const Costs = props => {
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
          <span>Manage Costs</span>
        </h1>
      </section>
    </DefaultLayout>
  )
}
