import React from 'react'
import { withRouter, Link } from 'react-router-dom'

import './Default.scss'

import { Masthead } from '@royalnavy/react-component-library'
import { ReactComponent as AppLogo } from './logo.svg'

export const DefaultLayout = withRouter(({ children, location }) => {
  function isActive(path) {
    return path === location.pathname
  }

  return (
    <>
      <Masthead
        homeLink={{ href: '/' }}
        LinkComponent={Link}
        navItems={[
          {
            label: 'Dashboard',
            to: '/',
            active: isActive('/'),
          },
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
    </>
  )
})
