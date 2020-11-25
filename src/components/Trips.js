import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button } from "./Button"
import { ImLocation } from "react-icons/im"
const Trips = ({ heading }) => {
  const data = useStaticQuery(graphql`
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getTrips(data) {
    const tripsArray = []
    data.allTripsJson.edges.forEach((item, index) => {
      tripsArray.push(
        <ProductCard key={index}>
          <ProductImg
            src={item.node.img.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ProductInfo>
            <TextWrap>
              <ImLocation />
              <ProductTitle>{item.node.name}</ProductTitle>
            </TextWrap>
            <ProductButton primary round to="/trips">
              {item.node.button}
            </ProductButton>
          </ProductInfo>
        </ProductCard>
      )
    })
    return tripsArray
  }

  return (
    <div>
      <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>{getTrips(data)}</ProductWrapper>
      </ProductsContainer>
    </div>
  )
}

export default Trips

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`
const ProductsHeading = styled.div`
  font-size: clamp(1.5rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`
const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 0 2rem;
  justify-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`
const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`
const ProductImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: relative;
  filter: brightness(70%);
  border-radius: 10px;
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
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
  align-items: center;
  position: absolute;
  top: 375px;
`

const ProductTitle = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin-left: 0.5rem;
`
const ProductButton = styled(Button)`
  position: absolute;
  top: 425px;
`
