import React from "react"
import styled from "styled-components"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import { FaTaxi, FaRoad, FaUserAlt } from "react-icons/fa"
import { MdSecurity } from "react-icons/md"
import { IconContext } from "react-icons"
const CountStats = () => {
  return (
    <CountStatsContainer>
      <Heading>Our Expertise</Heading>
      <Description>Our record and achievements since 2015</Description>
      <IconContext.Provider value={{ color: "#000", size: "3em" }}>
        <AllCountContainer>
          <IndividualCounter>
            <FaTaxi />
            <h1>
              <CountUp end={848} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h1>
            <h2>Rides and More</h2>
          </IndividualCounter>{" "}
          <IndividualCounter>
            <FaRoad />
            <h1>
              <CountUp end={120} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h1>
            <h2>Routes</h2>
          </IndividualCounter>
          <IndividualCounter>
            <FaUserAlt />
            <h1>
              {" "}
              <CountUp end={400} suffix="+" redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h1>
            <h2>Happy customers</h2>
          </IndividualCounter>
          <IndividualCounter>
            <MdSecurity />
            <h1>
              {" "}
              <CountUp end={62} suffix="+" redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h1>
            <h2>Trusted Vehicles</h2>
          </IndividualCounter>
        </AllCountContainer>
      </IconContext.Provider>
    </CountStatsContainer>
  )
}

export default CountStats

const CountStatsContainer = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-rows: 0.5fr 0.5fr 1fr;
  text-align: center;
  min-height: 80vh;
`

const Heading = styled.h1`
  font-size: clamp(1.5rem, 5vw, 3rem);
  margin: 1rem 0;
  color: #000;
`
const Description = styled.h2`
  font-size: clamp(1rem, 3vw, 2rem);
  color: #000;
`
const AllCountContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 70px;
  }
`
const IndividualCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
