import React from 'react'

import './Default.scss'

import { Masthead } from '@royalnavy/react-component-library'
import { ReactComponent as AppLogo } from './logo.svg'

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Masthead
        homeLink={{ href: '/' }}
        navItems={[
          { label: 'Dashboard', href: '/', active: true },
          { label: 'Manage', href: '/manage' },
        ]}
        user={{ initials: 'TH', href: '#' }}
        Logo={AppLogo}
      />
      <main className="layout__main">{children}</main>
    </>
  )
}
