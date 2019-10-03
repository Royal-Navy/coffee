import React from 'react'
import { withRouter } from 'react-router-dom'

import { HeadingIcon } from '../HeadingIcon'

import { Modal } from '@royalnavy/react-component-library'
import { IconPerson, IconCreditCard } from '@royalnavy/icon-library'

import './SubscribeModal.scss'

export const SubscribeModal = withRouter(({ history }) => {
  const primaryButton = {
    onClick: _ => console.log('primary'),
    children: 'Add Subscriber',
  }

  const secondaryButton = {
    onClick: _ => history.push('/subscriptions'),
    children: 'Cancel',
  }

  const tertiaryButton = {
    onClick: _ => console.log('tertiary'),
    children: 'Delete Subscriber',
    variant: 'tertiary',
    color: 'danger',
  }

  return (
    <Modal
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
      tertiaryButton={tertiaryButton}
      isOpen={true}
      className="subscribe-modal"
    >
      <header className="subscribe-modal__header">
        <div>
          <HeadingIcon>
            <IconPerson />
          </HeadingIcon>
          <span>Personal Information</span>
          <p>Enter the Subscriber's name and contact information.</p>
        </div>
        <div>
          <HeadingIcon>
            <IconCreditCard />
          </HeadingIcon>
          <span>Subscription Details</span>
          <p>Manage the size and frequency of the Subscriber's payments.</p>
        </div>
      </header>
      <div className="subscribe-modal__body">Hello, World!</div>
    </Modal>
  )
})
