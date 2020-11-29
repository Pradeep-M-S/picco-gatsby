import React from "react"
import Fade from "react-reveal/Fade"

import styled from "styled-components"
import { FaRupeeSign } from "react-icons/fa"
import { GiThreeFriends } from "react-icons/gi"
import { BiTaxi, BiSupport } from "react-icons/bi"

const StatsData = [
  {
    icon: (
      <FaRupeeSign
        css={`
          color: #000;
        `}
      />
    ),
    title: "Best Price",
    desc:
      " We reward you with lower rates the longer you rent a car from us and at best price.",
  },
  {
    icon: (
      <BiSupport
        css={`
          color: #000;
        `}
      />
    ),
    title: "24*7 Support",
    desc:
      " An immediate free transfer service to your residence and replacement car is available.",
  },
  {
    icon: (
      <GiThreeFriends
        css={`
          color: #000;
        `}
      />
    ),
    title: "Friendly Drivers",
    desc:
      "Our friendly and knowledgeable drivers will take care of you with the complete journey.",
  },
  {
    icon: (
      <BiTaxi
        css={`
          color: #000;
        `}
      />
    ),
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
                <Icon>{item.icon}</Icon>
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
  grid-gap: 40px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`
const StatsBox = styled.div`
  height: 100%;
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
  background: #eee;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
`
const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 2rem;
`
const Title = styled.p`
  font-size: clamp(1rem, 3.5vw, 1.5rem);
  font-weight: bold;
  margin-bottom: 0.5rem;
`
const Description = styled.p``
