import React from "react"
import Fade from "react-reveal/Fade"
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
import Blah from "../components/Blah"
import Hero1 from "../components/Hero1"
const IndexPage = () => (
  <Layout>
    <SEO title="Picco Cabs" />
    <Blah />
    <Hero1 id="app" />
    <Fade bottom>
      <Offers heading="Great offers for you" />
    </Fade>
    <Fade bottom>
      <Fleet heading="Picco's Fleet" />
    </Fade>
    <Fade bottom>
      <CountStats />{" "}
    </Fade>
    <Fade left>
      <Trips heading="Popular Destinations" />
    </Fade>{" "}
    <Fade right>
      <Testimonials />
    </Fade>
    <Fade left>
      <Stats />
    </Fade>{" "}
    <Hero />
    <Footer />
  </Layout>
)

export default IndexPage
// <script src="https://smtpjs.com/v3/smtp.js"></script>
//
