import React from 'react'

import './Manage.scss'

export const Manage = props => {
  const {
    match: {
      params: { id },
    },
  } = props

  return (
    <main>
      <h1>Manage Subscriptions</h1>
      <h2>Manage {id || ''}</h2>
    </main>
  )
}
