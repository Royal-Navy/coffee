import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import Bowser from 'bowser'

import {
  Masthead,
  MastheadNav,
  MastheadNavItem,
  MastheadUser,
} from '@royalnavy/react-component-library'

import { ReactComponent as AppLogo } from './logo.svg'

export const DefaultLayout = withRouter(({ children, location }) => {
  function isActive(path) {
    return location.pathname.includes(path)
  }

  const browserInfo = Bowser.parse(window.navigator.userAgent)

  return (
    <>
      <Masthead
        homeLink={<Link to="/" />}
        nav={
          <MastheadNav>
            <MastheadNavItem
              link={<Link to="/subscriptions">Subscriptions</Link>}
              isActive={isActive('/subscriptions')}
            />
            <MastheadNavItem
              link={<Link to="/costs">Costs</Link>}
              isActive={isActive('/costs')}
            />
          </MastheadNav>
        }
        user={<MastheadUser initials="TH" link={<Link to="#" />} />}
        Logo={AppLogo}
      />
      <main className="layout__main">{children}</main>
      <pre className="layout__debug">
        {JSON.stringify(browserInfo, null, 2)}
      </pre>
    </>
  )
})
