import React from 'react'
import { connect } from 'react-redux'
import { ActionTypes } from '../../../store/subscriptions'

import { InfoCard } from '../../presentational/InfoCard'

const InfoCardContainer = ({ subscription, toggleActive }) => {
  return <InfoCard subscription={subscription} handleToggle={toggleActive} />
}

const mapStateToProps = ({ subscriptions }, { id }) => {
  return {
    subscription: subscriptions.items.find(item => item.id === id),
  }
}

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    toggleActive: () =>
      dispatch({ type: ActionTypes.TOGGLE_ACTIVE, payload: id }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoCardContainer)
