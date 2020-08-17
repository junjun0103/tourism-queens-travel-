module.exports = {
  siteMetadata: {
    title_en: `Queen's Travel`,
    title_cn: `群星旅游公司`,
    image: "/images/inner_big_logo_3.png",
    url: "http://queenstravel.com", // No trailing slash allowed!
    description_en: `Queens Travel has been providing quality service to ADS tour groups, Incentive groups and FITs for more than 18 years in New Zealand.`,
    description_cn: `位于南半球美丽的'千帆之都'——新西兰最大城市奥克兰的——群星旅游公司（Queens Travel）是一家在新西兰注册的旅行社.`,
    author: `@queen`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://128.199.125.141:1337`,
        queryLimit: 1000,
        contentTypes: [
          `best-sales`,
          "Feedbacks",
          "Theme-Tour",
          "Tour-Guides",
          "Tourist-Information",
        ],
        loginData: {
          identifier: "carlos",
          password: "123456",
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#339966`,
        theme_color: `#339966`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
