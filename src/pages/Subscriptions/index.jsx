import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'

import './Subscriptions.scss'

import { DefaultLayout } from '../../layouts/Default'
import { RecordList } from '../../components/presentational/RecordList'
import { InfoCard } from '../../components/presentational/InfoCard'
import { HeadingIcon } from '../../components/presentational/HeadingIcon'
import { SubscribeModal } from '../../components/presentational/SubscribeModal'

import { Button } from '@royalnavy/react-component-library'
import { IconPerson } from '@royalnavy/icon-library'

export const Subscriptions = withRouter(props => {
  const {
    match: {
      params: { id },
    },
    history,
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
        <Button
          variant="primary"
          onClick={_ => history.push('/subscriptions/create')}
        >
          Add Subscriber
        </Button>
      </section>
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '100%', marginRight: '1rem' }}>
          <RecordList />
        </div>
        <div>
          <InfoCard id={id} />
        </div>
      </section>

      <Switch>
        <Route exact path="/subscriptions/create" component={SubscribeModal} />
        <Route
          exact
          path="/subscriptions/update/:id"
          component={SubscribeModal}
        />
      </Switch>
    </DefaultLayout>
  )
})
