import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Offers = ({ heading }) => {
  const data = useStaticQuery(graphql`
    query OffersQuery {
      allOffersJson {
        edges {
          node {
            alt
            name
            offerprice
            offerdesc
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  function getOffers(data) {
    const tripsArray = []
    data.allOffersJson.edges.forEach((item, index) => {
      tripsArray.push(
        <ProductCard key={index}>
          <ProductImg
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ProductInfo>
            <TextWrap>
              <ProductTitle>{item.node.name}</ProductTitle>
              <OfferPrice>
                Offer <b>{item.node.offerprice}</b>
              </OfferPrice>
              <OfferDescription>{item.node.offerdesc}</OfferDescription>
            </TextWrap>
          </ProductInfo>
        </ProductCard>
      )
    })
    return tripsArray
  }

  return (
    <div>
      <ProductsContainer>
        <Fade top>
          <ProductsHeading>{heading}</ProductsHeading>
        </Fade>
        <Fade>
          <ProductWrapper>{getOffers(data)}</ProductWrapper>
        </Fade>
      </ProductsContainer>
    </div>
  )
}

export default Offers

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;

  @media screen and (max-width: 500px) {
    background: #f6f6f6;
  }
`
const ProductsHeading = styled.h1`
  font-size: clamp(1.5rem, 5vw, 2rem);
  text-align: center;
  margin: 5rem 0;
  margin-top: 3rem;
  letter-spacing: 1px;
  font-weight: 700;
  color: #000;
`
const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 0 1rem;
  margin-bottom: 100px;
  justify-items: center;

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
    gap: 240px;
  }
`
const ProductCard = styled.div`
  line-height: 2;
  width: 90%;
  height: 100%;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`
const ProductImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 3px;
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 100%;
  color: #000;
`

const ProductTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: left;
  /* margin-left: 0.5rem; */
  /* border-bottom: 2px solid black; */
  margin-left: -30px;
  @media screen and (max-width: 868px) {
    margin-left: -30px;
  }
`
const OfferPrice = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  margin-left: 0.1rem;
  margin-left: -30px;
  @media screen and (max-width: 868px) {
  }
`
const OfferDescription = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 0.5 * normal;
  margin-left: 0.4rem;
  margin-left: -30px;
  @media screen and (max-width: 868px) {
  }
`
