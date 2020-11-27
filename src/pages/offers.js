import React from "react"
import Offers from "../components/Offers"
import Header2 from "../components/Header2"
import Layout from "../components/layout"
import SEO from "../components/seo"

const offers = () => {
  return (
    <div>
      <SEO title="Offers" />
      <Layout />
      <Header2 />
      <Offers />
    </div>
  )
}

export default offers

// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const SecondPage = () => (
//   <Layout>
//     <SEO title="Page two" />
//     <h1>Hi from the second page</h1>
//     <p>Welcome to page 2</p>
//     <Link to="/">Go back to the homepage</Link>
//   </Layout>
// )

// export default SecondPage
