import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Footer from "../components/Footer"
import CountStats from "../components/CountStats"
import Offers from "../components/Offers"
import Fleet from "../components/Fleet"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Offers heading="Great offers for you" />
    <Fleet heading="Picco's Fleet" />
    <CountStats />
    <Trips heading="Popular Destinations" />
    <Hero />
    <Testimonials />
    <Stats />
    <Footer />
  </Layout>
)

export default IndexPage
