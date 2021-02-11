import React, { useRef, useEffect } from 'react'
import "./Slider.css"
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"



function Slider() {

    const testImagesQuery = graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["test-01", "test-02", "test-03"] }
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
    } = useStaticQuery(testImagesQuery)


    const slider = useRef(null);

    useEffect(() => {
        console.log(slider.current.children);
        console.log(slider);
        slider.current.style.overflow = "hidden"
        // slider.current.style.transform = "scale(0.3)"
        slider.current.childNodes.forEach((s, i) => {
            console.log(s);
            s.style.transform = `translateX(${100 * i}%)`;
            s.style.overflow = "hidden"

        })
    }, [])

    let curSlide = 0;

    const moveRight = () => {
        curSlide++;

        if (curSlide >= slider.current.children.length) {
            curSlide = 0;
        }

        slider.current.childNodes.forEach((s, i) => {
            s.style.transform = `translateX(${100 * (i - curSlide)}%)`
        })
    }

    const moveLeft = () => {
        curSlide--;

        if (curSlide < 0) {
            curSlide = slider.current.children.length - 1;
        }

        slider.current.childNodes.forEach((s, i) => {
            s.style.transform = `translateX(${100 * (i - curSlide)}%)`
        })
    }
    return (
        <section className="section" id="section--3" >
            {/* <div className="section__title section__title--testimonials">
                <h2 className="section__description">Not sure yet?</h2>
                <h3 className="section__header">
                    Millions of Bankists are already making their lifes simpler.
        </h3>
            </div> */}

            <div className="slider">
                <div ref={slider}><div className="slide slide--1">
                    <div className="testimonial">
                        <h5 className="testimonial__header">Cheap Cab and a friendly driver</h5>
                        <blockquote className="testimonial__text">Good approach... Nice customer interaction... Worth to call again
                        The vehicle is in good condition. The driver is very professional and friendly as well as drives safely.
                        The vehicle is in good condition. The driver is very professional and friendly as well as drives safely.
                        The vehicle is in good condition. The driver is very professional and friendly as well as drives safely.
                        The vehicle is in good condition. The driver is very professional and friendly as well as drives safely.
 </blockquote>
                        <address className="testimonial__author">
                            <Img fluid={images[0].node.childImageSharp.fluid}
                                alt={images[0].node.base.split(".")[0]}
                                fadeIn="true" alt="" className="testimonial__photo" />
                            <h6 className="testimonial__name">- Vijay</h6>
                        </address>
                    </div>
                </div>

                    <div className="slide slide--2">
                        <div className="testimonial">
                            <h5 className="testimonial__header">
                                Affordable Cabs at Affordable prices            </h5>
                            <blockquote className="testimonial__text">
                                Good approach... Nice customer interaction... Worth to call again
                                The vehicle is in good condition. The driver is very professional and friendly as well as drives safely.
                                The vehicle is in good condition. The driver is very professional and friendly as well as drives safely.
                                The vehicle is in good condition. The driver is very professional and friendly as well as drives safely.
                                The vehicle is in good condition. The driver is very professional and friendly as well as drives safely.

            </blockquote>
                            <address className="testimonial__author">
                                <Img fluid={images[1].node.childImageSharp.fluid}
                                    alt={images[1].node.base.split(".")[0]}
                                    fadeIn="true" alt="" className="testimonial__photo" />
                                <h6 className="testimonial__name">- Jithin</h6>
                            </address>
                        </div>
                    </div>

                    <div className="slide slide--3">
                        <div className="testimonial">
                            <h5 className="testimonial__header">
                                Well behaved. Good driving, Friendly.
            </h5>
                            <blockquote className="testimonial__text">
                                This is my first ride with piccocabs and is better than expected.    Good approach... Nice customer interaction... Worth to call again
                                The vehicle is in good condition. The driver is very professional and friendly as well as drives safely.
                                The vehicle is in good condition. The driver is very professional and friendly as well as drives safely.
                                The vehicle is in good condition. The driver is very professional and friendly as well as drives safely.
                                The vehicle is in good condition. The driver is very professional and friendly as well as drives safely.

            </blockquote>
                            <address className="testimonial__author">
                                <Img fluid={images[2].node.childImageSharp.fluid}
                                    alt={images[2].node.base.split(".")[0]}
                                    fadeIn="true" className="testimonial__photo" />
                                <h6 className="testimonial__name">- Bala</h6>
                            </address>
                        </div>
                    </div></div>


                {/* <!-- <div className="slide"><img src="img/img-1.jpg" alt="Photo 1" /></div>
                <div className="slide"><img src="img/img-2.jpg" alt="Photo 2" /></div>
                <div className="slide"><img src="img/img-3.jpg" alt="Photo 3" /></div>
                <div className="slide"><img src="img/img-4.jpg" alt="Photo 4" /></div> --> */}
                <button onClick={() => moveLeft()} className="slider__btn slider__btn--left">&larr;</button>
                <button onClick={() => moveRight()} className="slider__btn slider__btn--right">&rarr;</button>
                <div className="dots"></div>
            </div>
        </section >

    )
}

export default Slider
