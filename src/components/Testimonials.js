import React from "react"
import Img from "gatsby-image"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"
import styled from "styled-components"
const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <TopLine>Test</TopLine>
      <Description>What people are Saying</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline />
            <h3>Sean Michaels</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              corrupti dignissimos reiciendis accusantium quaerat asperiores
              repudiandae amet commodi voluptatum cum!
            </p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb />
            <h3>Sierra</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              corrupti dignissimos reiciendis accusantium quaerat asperiores
              repudiandae amet commodi voluptatum cum!
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>image</ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div``
const TopLine = styled.div``
const Description = styled.div``
const ContentWrapper = styled.div``
const Testimonial = styled.div``
const ColumnOne = styled.div``
const ColumnTwo = styled.div``
