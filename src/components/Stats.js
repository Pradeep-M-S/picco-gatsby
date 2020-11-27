import React from "react"
import Fade from "react-reveal/Fade"

import styled from "styled-components"
import { FaRupeeSign } from "react-icons/fa"
import { FcOnlineSupport } from "react-icons/fc"
import { GiThreeFriends } from "react-icons/gi"
import { BiTaxi } from "react-icons/bi"

const StatsData = [
  {
    icon: (
      <FaRupeeSign
        css={`
          color: #047bf1;
        `}
      />
    ),
    title: "Best Price",
    desc:
      " We reward you with lower rates the longer you rent a car from us and at best price.",
  },
  {
    icon: (
      <FcOnlineSupport
        css={`
          color: #f3a82e;
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
          color: #f34f2e;
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
          color: #3af576;
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
      <Fade>
        <Heading>Why Choose Us ?</Heading>
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
  text-align: start;
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`
const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`
const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 2rem;
`
const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 2rem);
  font-weight: bold;
  margin-bottom: 0.5rem;
`
const Description = styled.p``
