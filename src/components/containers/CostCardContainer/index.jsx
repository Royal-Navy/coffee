import React from 'react'
import { connect } from 'react-redux'
import dayjs from 'dayjs'

import { ActionTypes } from '../../../store/costs'

import { CostCard } from '../../presentational/CostCard'

const CostCardContainer = ({ total, nextMonth, handleCreate }) => {
  return (
    <CostCard total={total} nextMonth={nextMonth} handleCreate={handleCreate} />
  )
}

const total = costs => {
  return costs.reduce((prev, item) => {
    return prev + parseInt(item.price)
  }, 0)
}

const nextMonth = subscriptions => {
  const payments = subscriptions.flatMap(item => {
    return item.payments
  })

  const nextMonth = payments.filter(
    item =>
      dayjs(item.date).isAfter(
        dayjs()
          .add(1, 'month')
          .startOf('month')
      ) &&
      dayjs(item.date).isBefore(
        dayjs()
          .add(2, 'month')
          .startOf('month')
      )
  )

  const total = nextMonth.reduce((prev, item) => {
    return prev + parseInt(item.amount)
  }, 0)

  return total
}

const mapStateToProps = ({ costs, subscriptions }) => {
  return {
    total: total(costs.items),
    nextMonth: nextMonth(subscriptions.items),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleCreate: payload => {
      dispatch({ type: ActionTypes.CREATE_COST, payload: payload })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CostCardContainer)
