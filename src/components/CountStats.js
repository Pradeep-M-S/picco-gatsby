import React from "react"
import styled from "styled-components"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import { FaTaxi, FaRoad, FaUserAlt } from "react-icons/fa"
import { MdSecurity } from "react-icons/md"
import { IconContext } from "react-icons"
import Fade from "react-reveal/Fade"
const CountStats = () => {
  return (
    <CountStatsContainer>
      <Fade top>
        <Heading>Our Expertise</Heading>
      </Fade>
      <Description>Our record and achievements since 2015</Description>
      <Fade>
        <IconContext.Provider value={{ color: "#a7be38", size: "3em" }}>
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
      </Fade>
    </CountStatsContainer>
  )
}

export default CountStats

const CountStatsContainer = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-rows: 0.4fr 1fr 2.8fr;
  text-align: center;
  min-height: 80vh;
  height: 100vh;
`

const Heading = styled.h1`
  font-size: clamp(2rem, 5vw, 2.8rem);
  margin: 1rem 0;
  letter-spacing: 2px;
  color: #a7be38;
`
const Description = styled.h2`
  font-size: clamp(1rem, 3vw, 1.4rem);
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
  @media screen and (max-width: 328px) {
    gap: 20px;
  }
`
const IndividualCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
