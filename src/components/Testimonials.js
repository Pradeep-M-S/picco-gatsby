import React from "react"
import styled from "styled-components"
import { BsChatSquareQuote } from "react-icons/bs"
import { IconContext } from "react-icons"
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc"
const Testimonial = ({ bcol, content, man, woman, col }) => {
  return (
    <TestContainer
      style={{
        backgroundColor: bcol,
        color: col,
      }}
    >
      <IconContext.Provider value={{ size: "4em" }}>
        <BsChatSquareQuote />
      </IconContext.Provider>
      <TestText>{content}</TestText>
      <IconContext.Provider value={{ size: "3em" }}>
        {man ? (
          <AvatarWrapper>
            <Avatar>
              <FcBusinessman />
            </Avatar>
            {man}
          </AvatarWrapper>
        ) : (
          <AvatarWrapper>
            <Avatar>
              <FcBusinesswoman />
            </Avatar>
            {woman}
          </AvatarWrapper>
        )}
      </IconContext.Provider>
    </TestContainer>
  )
}

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <TestimonialsHeading>
        What our
        <span> Clients</span> Say ?
      </TestimonialsHeading>
      <TestimonialsWrapper>
        <Testimonial
          bcol="#fff"
          content="Good approach... Nice Customer interaction... Worth to call again, I am really happy to had the best cab."
          man="Vijay"
        />
        <Testimonial
          bcol="#a7be38"
          col="#fff"
          content="The vehicle is in good condition. The driver is very professional and friendly as well as drives safely."
          man={false}
          woman="Anjana"
        />
        <Testimonial
          bcol="#fff"
          man="Jithin"
          content="Well behaved. Good driving, Friendly. This is my first ride with piccocabs and is better than expected."
        />
      </TestimonialsWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  display: grid;
  min-height: 90vh;
  height: 100%;
  grid-template-rows: 0.1fr 0.8fr 0.3fr;
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: 1;
    min-height: 100%;
    height: 120vh;
  }
`
const TestimonialsHeading = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: black;
  letter-spacing: 1.2px;
  line-height: 2;
  span {
    color: #a7be38;
  }
`
const TestimonialsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`
const TestContainer = styled.div`
  height: 90%;
  justify-self: center;
  padding: 1rem 1rem 2rem 1rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05) translateY(-3px);
    box-shadow: 0 10px 13px rgba(0, 0, 0, 0.2);
    transition: transform 0.5s ease;
  }

  @media screen and (max-width: 868px) {
    width: 90%;
    gap: 25px;
  }
`
const TestText = styled.h3`
  font-size: clamp(1rem, 3vw, 1.1rem);
  font-weight: 400;
`
const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Avatar = styled.div`
  background: #a7be38;
  border-radius: 50%;
`
