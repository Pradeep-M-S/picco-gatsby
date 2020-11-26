import React from "react"
import styled from "styled-components"
import Header2 from "../components/Header2"
const About = () => {
  return (
    <AboutContainer>
      <Header2 />
      <Heading>About us</Heading>
    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.div`
  display: flex;
  padding-top: 120px;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  font-family: sans-serif;
`
const Heading = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  margin: 0 auto;
`
