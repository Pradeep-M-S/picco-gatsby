import React from "react"
import styled from "styled-components"
import Header2 from "../components/Header2"
import CountStats from "../components/CountStats"
import Stats from "../components/Stats"
import Layout from "../components/layout"
const About = () => {
  return (
    <AboutContainer>
      <Layout />
      <Header2 />
      <Heading>About us</Heading>
      <CountStats />
      <StatsContainer>
        <Stats />
      </StatsContainer>
    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.div`
  display: flex;
  padding-top: 120px;
  flex-direction: column;
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  font-family: sans-serif;
`
const Heading = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  margin: 0 auto;
`
const StatsContainer = styled.div`
  max-width: 100vw;
  overflow: hidden;
`
