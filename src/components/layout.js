import React, { Component } from "react"

import Header2 from "./Header2"
import { GlobalStyle } from "./styles/GlobalStyles"
import styled from "styled-components"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolled: 0,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollProgress)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollProgress)
  }

  scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop

    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = `${(scrollPx / winHeightPx) * 100}%`

    this.setState({
      scrolled: scrolled,
    })
  }

  render() {
    const progressBarStyle = {
      height: "3px",
      background: "#7C9F22",
      width: this.state.scrolled,
      zIndex: 10045454510032240000000000001,
      transition: "all 800ms cubic-bezier(.2,.8,.2,1)",
    }
    return (
      <>
        <GlobalStyle />
        <Header2 />
        <ProgressContainer>
          <div className="progress-bar" style={progressBarStyle} />
        </ProgressContainer>
        <main>{this.props.children}</main>
      </>
    )
  }
}

export default Layout

const ProgressContainer = styled.div`
  background: transparent;
  height: 2px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10045454510001227845645312101;
`
