import React from 'react'
import { connect } from 'react-redux'

import { CostRecordList } from '../../presentational/CostRecordList'

const CostRecordListContainer = ({ costs }) => {
  return <CostRecordList costs={costs} />
}

const mapStateToProps = ({ costs }) => {
  return {
    costs: costs.items,
  }
}

export default connect(mapStateToProps)(CostRecordListContainer)
