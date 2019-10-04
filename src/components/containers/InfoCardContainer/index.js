import React from 'react'
import { connect } from 'react-redux'

import { InfoCard } from '../../presentational/InfoCard'

const InfoCardContainer = ({ subscription }) => {
  return <InfoCard subscription={subscription} />
}

const mapStateToProps = ({ subscriptions }, { id }) => {
  return {
    subscription: subscriptions.items.find(item => item.id === id),
  }
}

export default connect(mapStateToProps)(InfoCardContainer)
