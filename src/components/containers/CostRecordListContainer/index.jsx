import React from 'react'
import { connect } from 'react-redux'
import { ActionTypes } from '../../../store/costs'

import { CostRecordList } from '../../presentational/CostRecordList'

const CostRecordListContainer = ({ costs, deleteCost }) => {
  return <CostRecordList costs={costs} handleDelete={deleteCost} />
}

const mapStateToProps = ({ costs }) => {
  return {
    costs: costs.items,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCost: id => dispatch({ type: ActionTypes.DELETE_COST, payload: id }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CostRecordListContainer)
