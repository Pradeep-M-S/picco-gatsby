import React from "react"
import styled from "styled-components"
import OutstationForm from "./OutstationForm"
import ImageContainer from "./ImageContainer"
const Hero1 = () => {
  return (
    <Hero1Container>
      <OutstationForm />
      <ImageContainer />
    </Hero1Container>
  )
}

export default Hero1

const Hero1Container = styled.div`
  min-height: 60vh;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #f6f6f6;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    min-height: 100vh;
    gap: -50px;
  }
`