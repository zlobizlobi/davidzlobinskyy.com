const path = require('path');

module.exports = {
  siteMetadata: {
    title: `David Zlobinskyy`,
    description: `Hi there, I am David Zlobinskyy - a spirited web developer. This is my personal website.`,
    author: `@zlobizlobi`,
    siteUrl: `https://davidzlobinskyy.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.davidzlobinskyy.com',
        sitemap: 'https://www.davidzlobinskyy.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: ['/', '/contact'] }],
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        styles: path.join(__dirname, 'src/styles'),
        utils: path.join(__dirname, 'src/utils'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-tslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|cache|public)/,
        loader: 'ts-loader',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David Zlobinskyy | Web Development`,
        short_name: `David Zlobinskyy`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `fullscreen`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-anchor-links',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
