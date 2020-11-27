import React from "react"
import styled from "styled-components"
import CarGif from "../assets/images/cargif.gif"
const ImageContainer = () => {
  return (
    <ImageWrapper>
      <GifWrapper>
        <Image src={CarGif} alt="Car Gif" />
      </GifWrapper>
    </ImageWrapper>
  )
}

export default ImageContainer

const ImageWrapper = styled.div`
  height: 100%;
  @media screen and (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`

const GifWrapper = styled.div`
  margin-bottom: 80px;
  position: relative;
  width: 100%;
  background: red;
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
