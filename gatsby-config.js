module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
    siteUrl: 'https://gatsbystarterdefaultsource.gatsbyjs.io/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-aphrodite',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/content/pages`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        // theme_color: `#663399`,
        display: 'minimal-ui',
        icon: 'content/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-offline`,
  ],
};
