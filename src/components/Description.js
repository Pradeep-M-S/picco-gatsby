//about us description component
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
import { graphql, useStaticQuery } from "gatsby"

const Description = () => {
  const mockup1query = graphql`
    query {
      allFile(filter: { name: { in: ["mockup-1"] } }) {
        totalCount
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `
  const {
    allFile: { edges: images }, //destructuring
  } = useStaticQuery(mockup1query)

  return (
    <DescriptionContainer>
      <DescriptionImage>
        <MockupImage
          fluid={images[0].node.childImageSharp.fluid}
          alt={images[0].node.base.split(".")[0]}
        ></MockupImage>
      </DescriptionImage>
      <DescriptionText>
        <Fade>
          <h1>Picco Cabs</h1>
          <h2>
            Picco Cabs is an emerging indian startup based on Madurai to provide
            Hassle free & Top class cabs services at your doorsteps in lowest
            prices. We are thrilled to be a part of leading travel companies in
            South India.
          </h2>
        </Fade>
      </DescriptionText>
    </DescriptionContainer>
  )
}

export default Description
const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  min-height: 85vh;
  padding: 0;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const DescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem calc((100vw - 1300px) / 2);
  padding: 30px;
  h1 {
    font-size: clamp(2rem, 4.5vw, 4rem);
    color: #799c20;
    border-bottom: 1.5px solid black;
    margin-bottom: 10px;
    letter-spacing: 2px;
  }
  h2 {
    font-size: clamp(1.2rem, 4vw, 1.5rem);
  }
`
const DescriptionImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const MockupImage = styled(Img)`
  width: 80%;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.09);
    transition: all 0.5s ease;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  }
`
