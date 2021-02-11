import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Footer from "../components/Footer"
import CountStats from "../components/CountStats"
import Offers from "../components/Offers"
import Fleet from "../components/Fleet"
import Blah from "../components/Blah"
import Hero1 from "../components/Hero1"
import WhatsappIcon from "../components/WhatsappIcon"
import Slider from "../components/Slider"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Blah />
    <WhatsappIcon />
    <Hero1 />
    <Offers heading="Great Offers For You" id="offers" className="offers" />
    <Fleet heading="Picco's Fleet" />
    <Stats />
    <CountStats />
    <Testimonials />
    <Slider />
  </Layout>
)

export default IndexPage
