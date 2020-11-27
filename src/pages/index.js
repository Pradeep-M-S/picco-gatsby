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

const IndexPage = () => (
  <Layout>
    <SEO title="Picco Cabs" />
    <Blah />
    <WhatsappIcon />
    <Hero1 />
    <Offers heading="Great offers for you" id="offers" className="offers" />
    <Fleet heading="Picco's Fleet" />
    <CountStats />
    <Testimonials />
    <Stats />
    <Trips id="trips" heading="Popular Destinations" /> <Footer />
  </Layout>
)

export default IndexPage
