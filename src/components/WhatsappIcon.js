import React from "react"
import styled from "styled-components"
import { SiWhatsapp } from "react-icons/si"
const WhatsappIcon = () => {
  return (
    <IconContainer>
      <WhatsappLink
        target="_blank"
        rel="noopener noreferrer"
        href="https://api.whatsapp.com/send?phone=919159157070"
      >
        <SiWhatsapp
          size="2em"
          style={{ zIndex: "9201920192093545", color: "#fff" }}
        />
      </WhatsappLink>
    </IconContainer>
  )
}

export default WhatsappIcon

const IconContainer = styled.div`
  color: white;
  background: #7c9c1d;
  border-radius: 50%;
  padding: 15px;
  /* font-size: 5rem; */
  z-index: 9201920192091;
  position: fixed;
  bottom: 30px;
  right: 30px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 768px) {
    bottom: 15px;
    right: 15px;
    padding: 10px;
  }
`
const WhatsappLink = styled.a`
  cursor: pointer;
  color: #fff;
`
