import React from 'react'
import { connect } from 'react-redux'

import { SubscriptionRecordList } from '../../presentational/SubscriptionRecordList'

const SubscriptionRecordListContainer = ({ subscriptions }) => {
  return <SubscriptionRecordList subscriptions={subscriptions} />
}

const mapStateToProps = ({ subscriptions }) => {
  return {
    subscriptions: subscriptions.items,
  }
}

export default connect(mapStateToProps)(SubscriptionRecordListContainer)
