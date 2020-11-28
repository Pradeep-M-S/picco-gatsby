import React from "react"
import styled from "styled-components"
import Header2 from "../components/Header2"
import CountStats from "../components/CountStats"
import Stats from "../components/Stats"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Description from "../components/Description"
import Description2 from "../components/Description2"
const About = () => {
  return (
    <AboutContainer>
      <SEO title="About Us" />
      <Layout />
      <Header2 />
      <Heading>About us</Heading>
      <Description />
      <Description2 />
      <CountStats />
      <StatsContainer>
        <Stats />
      </StatsContainer>
    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.div`
  padding-top: 110px;
  width: 100vw;
  max-width: 100vw;
  text-align: center;
`
const Heading = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  margin: 0 auto;
  width: 100%;
  padding-top: 10px;
`
const StatsContainer = styled.div`
  max-width: 100vw;
  overflow: hidden;
`
