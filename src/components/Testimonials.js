import React from "react"
import Fade from "react-reveal/Fade"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb, FaAirFreshener } from "react-icons/fa"
import styled from "styled-components"
const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <Fade>
        <TopLine>Testimonials</TopLine>
        <Description>What people are Saying</Description>
        <ContentWrapper>
          <ColumnOne>
            <Testimonial>
              {" "}
              <IoMdCheckmarkCircleOutline
                css={`
                  font-size: 2rem;
                  color: #3fffa8;
                  margin-bottom: 1rem;
                `}
              />
              <h3>Sanju</h3>
              <p>
                Good approach... Nice Customer interaction... Worth to call
                again, I am really happy to had the best cab.
              </p>
            </Testimonial>
            <Testimonial>
              <FaRegLightbulb
                css={`
                  font-size: 2rem;
                  color: #f9b19b;
                  margin-bottom: 1rem;
                `}
              />
              <h3>Rahul</h3>
              <p>
                Well behaved. Good driving, Friendly. This is my first ride with
                redtaxi and is better than expected.
              </p>
            </Testimonial>{" "}
            <Testimonial>
              <FaAirFreshener
                css={`
                  font-size: 2rem;
                  color: #f9129b;
                  margin-bottom: 1rem;
                `}
              />
              <h3>Mahalakshmi Sundaram</h3>
              <p>
                The vehicle is in good condition. The driver is very
                professional and friendly as well as drives safely.
              </p>
            </Testimonial>{" "}
            <Testimonial>
              {" "}
              <IoMdCheckmarkCircleOutline
                css={`
                  font-size: 2rem;
                  color: #3fffa8;
                  margin-bottom: 1rem;
                `}
              />
              <h3>Madhavan</h3>
              <p>
                Good approach... Nice Customer interaction... Worth to call
                again, I am really happy to had the best cab.
              </p>
            </Testimonial>
            <Testimonial>
              <FaRegLightbulb
                css={`
                  font-size: 2rem;
                  color: #f9b19b;
                  margin-bottom: 1rem;
                `}
              />
              <h3>Anbu Sivam</h3>
              <p>
                Well behaved. Good driving, Friendly. This is my first ride with
                redtaxi and is better than expected.
              </p>
            </Testimonial>{" "}
            <Testimonial>
              <FaAirFreshener
                css={`
                  font-size: 2rem;
                  color: #f9129b;
                  margin-bottom: 1rem;
                `}
              />
              <h3>Sundar</h3>
              <p>
                The vehicle is in good condition. The driver is very
                professional and friendly as well as drives safely.
              </p>
            </Testimonial>
          </ColumnOne>
        </ContentWrapper>{" "}
      </Fade>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  height: 100%;
  width: 100%;
  color: #000;
  background-color: #fcfcfc;
  padding: 5rem calc((100vw - 1300px) / 2);
`
const TopLine = styled.div`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`

const Description = styled.div`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(2rem, 5vw, 3rem);
  margin: 0 auto;
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 2rem;
`

const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 1rem;
  }

  p {
    color: #3b3b3b;
  }
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 320px) {
    grid-template-columns: 1fr;
  }
`
