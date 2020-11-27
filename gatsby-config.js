module.exports = {
  siteMetadata: {
    title: `Picco Cabs`,
    description: `Picco cabs - Madurai's Best and Cheapest Cab Services`,
    author: `NoNo design`,
    siteUrl: `https://www.piccocabs.in`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.piccocabs.in",
        sitemap: "https://www.piccocabs.in/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`josefin sans`],
        display: "swap",
      },
    },
  ],
}
