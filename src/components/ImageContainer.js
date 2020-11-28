import React from "react"
import styled from "styled-components"
import CarGif from "../assets/images/cargif.webp"

import { SocialIconLink } from "./Footer.elements"
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
const ImageContainer = () => {
  return (
    <ImageWrapper>
      <GifWrapper>
        <Image src={CarGif} alt="Car Gif" />
      </GifWrapper>
      <SocialIcons>
        <SocialIconLink
          href="https://www.facebook.com/piccocab"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook color="#799c20" />
        </SocialIconLink>
        <SocialIconLink
          href="https://instagram.com/piccocabs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram color="#799c20" />
        </SocialIconLink>
        <SocialIconLink
          href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zKo0rirMKzA1YLRSNagwTjIwSDY1NDVMSUpNSTZNsTKoME02SDO3TE6xTDQ3SzOxMPTiKshMTs5XSE5MKgYAg7ATpg&q=picco+cabs&rlz=1C1SQJL_enIN863IN863&oq=picco&aqs=chrome.1.69i60j46j69i57j0j46j69i60l3.2118j0j4&sourceid=chrome&ie=UTF-8"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Mail"
        >
          <FaGoogle color="#799c20" />
        </SocialIconLink>
        <SocialIconLink
          href="mailto:piccocabs@gmail.com"
          target="_blank"
          aria-label="LinkedIn"
        >
          <FiMail color="#799c20" />
        </SocialIconLink>
      </SocialIcons>{" "}
    </ImageWrapper>
  )
}

export default ImageContainer

const ImageWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.6fr 50px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 0;
    grid-template-rows: 120px 20px;
  }
`

const GifWrapper = styled.div`
  margin-bottom: 80px;
  position: relative;
  width: 100%;
  margin-bottom: 100px;
  @media screen and (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`

const Image = styled.img`
  transform: scale(0.8);
  width: 100%;
  position: absolute;
  top: 0;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    margin-top: -150px;
    margin-bottom: 0;
  }
`
const SocialIcons = styled.div`
  width: 50%;
  justify-self: center;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`
