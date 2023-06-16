/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Caglar Yalcin`,
    siteUrl: `https://caglaryalcin.com`,
    author: `@caglaryalcin`,
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp", "gatsby-transformer-sharp", `gatsby-transformer-remark`,`gatsby-plugin-react-helmet`,
    `gatsby-plugin-jss`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
    },

    __key: "images"
  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Caglar Yalcin - System Engineer`,
        short_name: `Caglar Yalcin`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ]
};
