import React from 'react'

import './Manage.scss'

import { DefaultLayout } from '../../layouts/Default'

export const Manage = props => {
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
    </DefaultLayout>
  )
}
