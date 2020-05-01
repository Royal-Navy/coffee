import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'

import { DefaultLayout } from '../../layouts/Default'

import SubscriptionRecordListContainer from '../../components/containers/SubscriptionRecordListContainer'
import InfoCardContainer from '../../components/containers/InfoCardContainer'
import SubscribeModalContainer from '../../components/containers/SubscribeModalContainer'

import { HeadingIcon } from '../../components/presentational/HeadingIcon'

import { Button } from '@royalnavy/react-component-library'
import { IconPerson } from '@royalnavy/icon-library'

export const Subscriptions = withRouter(props => {
  const {
    history,
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
        <Button
          variant="primary"
          onClick={_ => history.push('/subscriptions/create')}
        >
          Add Subscriber
        </Button>
      </section>
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '100%', marginRight: '1rem' }}>
          <SubscriptionRecordListContainer />
        </div>
        <div>
          <InfoCardContainer id={id} />
        </div>
      </section>

      <Switch>
        <Route
          exact
          path="/subscriptions/create"
          component={SubscribeModalContainer}
        />
        <Route
          exact
          path="/subscriptions/update/:id"
          component={SubscribeModalContainer}
        />
      </Switch>
    </DefaultLayout>
  )
})
