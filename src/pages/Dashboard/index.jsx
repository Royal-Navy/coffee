import React from 'react'

import './Dashboard.scss'

import { DefaultLayout } from '../../layouts/Default'

export const Dashboard = props => {
  return (
    <DefaultLayout>
      <section>
        <h1 className="page__heading">Dashboard</h1>
      </section>
    </DefaultLayout>
  )
}
