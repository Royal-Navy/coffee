import React from 'react'

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Default Layout</h1>
      </header>
      <main>{children}</main>
    </>
  )
}
