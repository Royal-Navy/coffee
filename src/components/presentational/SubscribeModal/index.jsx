import React, { useState } from 'react'

import { HeadingIcon } from '../HeadingIcon'

import { Modal } from '@royalnavy/react-component-library'
import { IconPerson, IconCreditCard } from '@royalnavy/icon-library'

import './SubscribeModal.scss'

export const SubscribeModal = ({ open = false }) => {
  const [isOpen, setIsOpen] = useState(open)

  const primaryButton = {
    onClick: event => console.log('primary'),
    children: 'Add Subscriber',
  }

  const secondaryButton = {
    onClick: event => {
      setIsOpen(false)
    },
    children: 'Cancel',
  }

  const tertiaryButton = {
    onClick: event => console.log('tertiary'),
    children: 'Delete Subscriber',
    variant: 'tertiary',
    color: 'danger',
  }

  return (
    <Modal
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
      tertiaryButton={tertiaryButton}
      isOpen={isOpen}
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
}
