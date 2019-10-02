import React from 'react'

import './Default.scss'

import { Masthead } from '@royalnavy/react-component-library'

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Masthead
        homeLink={{ href: '/' }}
        navItems={[
          { label: 'Dashboard', href: '/', active: true },
          { label: 'Manage', href: '/manage' },
        ]}
        title="NELSON Coffee"
        user={{ initials: 'TH', href: '#' }}
      />
      <main className="layout__main">{children}</main>
    </>
  )
}
