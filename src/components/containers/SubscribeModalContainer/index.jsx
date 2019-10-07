import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { SubscribeModal } from '../../presentational/SubscribeModal'

const SubscribeModalContainer = withRouter(({ subscription }) => {
  return <SubscribeModal subscription={subscription} />
})

const mapStateToProps = ({ subscriptions }, { match: { params } }) => {
  return {
    subscription:
      subscriptions.items.find(item => item.id === params.id) || null,
  }
}

export default connect(mapStateToProps)(SubscribeModalContainer)
