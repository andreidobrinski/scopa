module.exports = {
  siteMetadata: {
    title: `Scopa Primiera Score`,
    description: `Calculate the primiera score in a game of Scopa.`,
    author: `Andrei Dobrinski`,
  },
  pathPrefix: '/scopa',
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#7511C9`,
        theme_color: `#7511C9`,
        display: `minimal-ui`,
        icon: `src/images/coin.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`rubik\:400,600`],
        display: 'swap',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
