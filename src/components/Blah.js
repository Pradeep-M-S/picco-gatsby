import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
const SlideShow = () => {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 2) {
        // total number of images minus 1
        setIndex(0)
      } else {
        setIndex(prev => prev + 1)
      }
    }, 5000) //duration
    return () => clearInterval(timer) //cleanup
  }, [index]) //compare

  // filter by sub-directory name slideshow
  const allImagesQuery = graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["B1", "B3", "B2"] }
        }
      ) {
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
  } = useStaticQuery(allImagesQuery)

  return (
    <>
      <SlidesContainer>
        <ProductImg
          style={{ width: "30%", height: "30" }}
          fluid={images[index].node.childImageSharp.fluid}
          alt={images[index].node.base.split(".")[0]}
          fadeIn="true"
          placeholderStyle={{ visibility: "hidden" }}
        />
      </SlidesContainer>
    </>
  )
}

export default SlideShow

const SlidesContainer = styled.div`
  margin-top: 100px;
  background: #a7be38;

  @media screen and (min-width: 768px) {
    height: 300px;
  }
`
const ProductImg = styled(Img)`
  min-width: 38%;
  max-width: 100%;
  margin: 0 auto;
  animation: fade 2s forwards ease;
  @keyframes fade {
    from {
      transform: scale(0.85) translateX(-1000px);
    }
    to {
      transform: scale(1) translateX(0);
    }
  }
  @media screen and (max-width: 900px) {
    min-width: 62%;
  }

  @media screen and (max-width: 768px) {
    min-height: 100%;
    min-width: 100%;
    max-height: 300px;
  }
`
