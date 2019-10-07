import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { SubscribeModal } from '../../presentational/SubscribeModal'
import { ActionTypes } from '../../../store/subscriptions'

const SubscribeModalContainer = withRouter(
  ({
    subscription,
    deleteSubscriber,
    createSubscriber,
    updateSubscriber,
    match: {
      params: { id },
    },
  }) => {
    let initialValues = {}

    if (subscription) {
      initialValues = {
        ...subscription.personal,
        ...subscription.subscription,
      }
    }

    return (
      <SubscribeModal
        initialValues={initialValues}
        handleDelete={deleteSubscriber}
        handleCreate={createSubscriber}
        handleUpdate={updateSubscriber}
        id={id}
      />
    )
  }
)

const mapStateToProps = (
  { subscriptions },
  {
    match: {
      params: { id },
    },
  }
) => {
  return {
    subscription: subscriptions.items.find(item => item.id === id) || null,
  }
}

const mapDispatchToProps = (
  dispatch,
  {
    match: {
      params: { id },
    },
  }
) => {
  return {
    deleteSubscriber: () => {
      dispatch({ type: ActionTypes.DELETE_SUBSCRIBER, payload: id })
    },
    createSubscriber: payload => {
      dispatch({ type: ActionTypes.CREATE_SUBSCRIBER, payload: payload })
    },
    updateSubscriber: payload => {
      dispatch({
        type: ActionTypes.UPDATE_SUBSCRIBER,
        payload: { id: id, data: payload },
      })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscribeModalContainer)
