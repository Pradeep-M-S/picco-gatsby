import React from "react"
import Img from "gatsby-image"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["guy", "girl"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <TestimonialsContainer>
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
            <h3>Sierra</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              corrupti dignissimos reiciendis accusantium quaerat asperiores
              repudiandae amet commodi voluptatum cum!
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
            <h3>Sean Michaels</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              corrupti dignissimos reiciendis accusantium quaerat asperiores
              repudiandae amet commodi voluptatum cum!
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((image, key) => (
            <Images key={key} fluid={image.node.childImageSharp.fluid} />
          ))}
          <Images />
        </ColumnTwo>
      </ContentWrapper>
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
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
const Images = styled(Img)`
  height: 100%;
  border-radius: 10px;
`
