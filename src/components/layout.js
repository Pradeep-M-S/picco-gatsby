import React from "react"

import Header2 from "./Header2"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header2 />
      <main>{children}</main>
    </>
  )
}

export default Layout
