import React from "react"

import Header2 from "./Header2"
import { GlobalStyle } from "./styles/GlobalStyles"
import theme from "./styles/theme"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import "../static/fonts/fonts.css"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle theme={theme} />
        <Header2 />
        <main>{children}</main>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
