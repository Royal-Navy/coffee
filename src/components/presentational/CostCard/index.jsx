import React from 'react'

import { Badge, Button } from '@royalnavy/react-component-library'
import { IconCreditCard } from '@royalnavy/icon-library'

import { HeadingIcon } from '../HeadingIcon'

import './CostCard.scss'

export const CostCard = props => {
  return (
    <article className="costcard">
      <header className="costcard__header">
        <span className="costcard__label">
          <Badge color="neutral" colorVariant="faded">
            Overview
          </Badge>
        </span>
        <div>
          <span>Current Kitty</span>
          <span>&pound;37.25</span>
        </div>
        <div>
          <span>Subs Next Month</span>
          <span className="is-positive">+&pound;53.00</span>
        </div>
      </header>
      <div className="costcard__body">
        <span className="costcard__title">
          <HeadingIcon>
            <IconCreditCard />
          </HeadingIcon>
          Add Costs
        </span>
        <form className="costcard__form">
          <Button variant="primary" className="costcard__btn">
            Add Cost
          </Button>
        </form>
      </div>
    </article>
  )
}
