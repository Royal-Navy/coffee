import React from 'react'

import { Avatar } from '@royalnavy/react-component-library'

export const SubscriberList = props => {
  return (
    <ul className="subscriber-list">
      <li className="subscriber-list__item">
        <div>
          <Avatar initials="TH" dark />
          <span>Tom Humphris</span>
        </div>
        <span className="subscriber-list__status">Paid Up</span>
      </li>
    </ul>
  )
}
