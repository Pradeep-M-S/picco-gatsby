import React from "react"
import Fade from "react-reveal/Fade"
import styled from "styled-components"
import logo1 from "../assets/images/why-1.png"
import logo2 from "../assets/images/why-2.png"
import logo3 from "../assets/images/why-3.png"
import logo4 from "../assets/images/why-4.png"

const StatsData = [
  {
    icon: logo1,
    title: "Best Price",
    desc:
      " We reward you with lower rates the longer you rent a car from us and at best price.",
  },
  {
    icon: logo2,
    title: "24*7 Support",
    desc:
      " An immediate free transfer service to your residence and replacement car is available.",
  },
  {
    icon: logo3,
    title: "Friendly Drivers",
    desc:
      "Our friendly and knowledgeable drivers will take care of you with the complete journey.",
  },
  {
    icon: logo4,
    title: "Premium Cabs",
    desc: "All our cars and brand new and regularly audited cars.",
  },
]

const Stats = () => {
  return (
    <StatsContainer>
      <Fade top>
        <Heading>Why Choose Us ?</Heading>
      </Fade>
      <Fade>
        <Wrapper>
          {StatsData.map((item, index) => {
            return (
              <StatsBox key={index}>
                <img
                  style={{
                    width: "65px",
                    height: "65px",
                  }}
                  src={item.icon} />
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
              </StatsBox>
            )
          })}
        </Wrapper>
      </Fade>
    </StatsContainer>
  )
}

export default Stats

const StatsContainer = styled.div`
  width: 100%;
  background: white;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
`
const Heading = styled.h1`
  text-align: center;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  margin-bottom: 3rem;
  letter-spacing: 2px;
  padding: 0 2rem;
  color: #a7be38;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`
const StatsBox = styled.div`
  height: 120%;
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.09) translateY(-10px);
    transition: all 0.5s ease;
    background: #a7be38;
  }
`

const Title = styled.p`
  font-size: clamp(1rem, 3.5vw, 1.5rem);
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin:10px;
`
const Description = styled.p`  margin:10px;
`
