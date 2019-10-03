import React, { useState } from 'react'

import { Avatar, Badge } from '@royalnavy/react-component-library'
import { IconCheckCircle, IconWarning, IconChat } from '@royalnavy/icon-library'

import './RecordList.scss'

export const RecordList = props => {
  const [active, setActive] = useState(null)

  return (
    <section className="record-list">
      <table className="record-list__table">
        <tbody>
          <tr
            className="record-list__row"
            onClick={({ target }) => setActive(target.getAttribute('id'))}
            data-id="1"
          >
            <td>
              <div className="record-list__name">
                <Avatar initials="AR" dark />
                <span>Adam Rooney</span>
              </div>
            </td>
            <td>
              <Badge color="danger" colorVariant="faded">
                Paused
              </Badge>
            </td>
            <td>
              <span className="record-list__tweet">
                <IconChat />
                @adam
              </span>
            </td>
            <td>
              <span className="record-list__cost">
                &pound;4 <span>/month</span>
              </span>
            </td>
            <td>
              <span className="record-list__status is-paid">
                <IconCheckCircle />
                Paid Up
              </span>
            </td>
          </tr>
          <tr className="record-list__row is-active">
            <td>
              <div className="record-list__name">
                <Avatar initials="AR" dark />
                <span>Adam Rooney</span>
              </div>
            </td>
            <td>
              <Badge color="danger" colorVariant="faded">
                Paused
              </Badge>
            </td>
            <td>
              <span className="record-list__tweet">
                <IconChat />
                @adam
              </span>
            </td>
            <td>
              <span className="record-list__cost">
                &pound;4 <span>/month</span>
              </span>
            </td>
            <td>
              <span className="record-list__status is-overdue">
                <IconWarning />
                PAYMENTS DUE
              </span>
            </td>
          </tr>
          <tr className="record-list__row">
            <td>
              <div className="record-list__name">
                <Avatar initials="AR" dark />
                <span>Adam Rooney</span>
              </div>
            </td>
            <td>
              <Badge color="danger" colorVariant="faded">
                Paused
              </Badge>
            </td>
            <td>
              <span className="record-list__tweet">
                <IconChat />
                @adam
              </span>
            </td>
            <td>
              <span className="record-list__cost">
                &pound;4 <span>/month</span>
              </span>
            </td>
            <td>
              <span className="record-list__status is-paid">
                <IconCheckCircle />
                Paid Up
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
