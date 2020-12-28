import React from "react"
import styled from "styled-components"
import CarGif from "../assets/images/cargif.gif"
import { SocialIconLink } from "./Footer.elements"
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { IconContext } from "react-icons"

const ImageContainer = () => {
  return (
    <ImageWrapper>
      <GifWrapper>
        <Image src={CarGif} alt="Car Gif" />
      </GifWrapper>
      <IconContext.Provider value={{ size: "1.4em" }}>
        <SocialIcons>
          <SocialIconLink
            href="https://www.facebook.com/piccocab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook color="#a7be38" />
          </SocialIconLink>
          <SocialIconLink
            href="https://instagram.com/piccocabs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram color="#a7be38" />
          </SocialIconLink>
          <SocialIconLink
            href="mailto:piccocabs@gmail.com"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FiMail color="#a7be38" />
          </SocialIconLink>{" "}
          <SocialIconLink
            href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zKo0rirMKzA1YLRSNagwTjIwSDY1NDVMSUpNSTZNsTKoME02SDO3TE6xTDQ3SzOxMPTiKshMTs5XSE5MKgYAg7ATpg&q=picco+cabs&rlz=1C1SQJL_enIN863IN863&oq=picco&aqs=chrome.1.69i60j46j69i57j0j46j69i60l3.2118j0j4&sourceid=chrome&ie=UTF-8"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Mail"
          >
            <FaGoogle color="#a7be38" />
          </SocialIconLink>
        </SocialIcons>{" "}
      </IconContext.Provider>
    </ImageWrapper>
  )
}

export default ImageContainer

const ImageWrapper = styled.div`
  margin:0 auto;
`

const GifWrapper = styled.div`
  margin:0 auto;
`

const Image = styled.img`
`
const SocialIcons = styled.div`
margin:15px;
display:flex;
justify-content:center;
gap:20px;
`
