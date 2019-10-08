import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import Bowser from 'bowser'

import './Default.scss'

import { Masthead } from '@royalnavy/react-component-library'
import { ReactComponent as AppLogo } from './logo.svg'

export const DefaultLayout = withRouter(({ children, location }) => {
  function isActive(path) {
    return location.pathname.includes(path)
  }

  const browserInfo = Bowser.parse(window.navigator.userAgent)

  return (
    <>
      <Masthead
        homeLink={{ href: '/' }}
        LinkComponent={Link}
        navItems={[
          {
            label: 'Subscriptions',
            to: '/subscriptions',
            active: isActive('/subscriptions'),
          },
          {
            label: 'Costs',
            to: '/costs',
            active: isActive('/costs'),
          },
        ]}
        user={{ initials: 'TH', href: '#' }}
        Logo={AppLogo}
      />
      <main className="layout__main">{children}</main>
      <pre className="layout__debug">
        {JSON.stringify(browserInfo, null, 2)}
      </pre>
    </>
  )
})
