const path = require('path');

module.exports = {
  siteMetadata: {
    title: `David Zlobinskyy - Frontend Developer`,
    description: `My name is David Zlobinskyy. I do Frontend Webdevelopment. Having 2 years of experience, I like designing web-applications & building them using React and Gatsby.`,
    author: `@zlobizlobi`,
    siteUrl: `https://davidzlobinskyy.com`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-anchor-links',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.davidzlobinskyy.com',
        sitemap: 'https://www.davidzlobinskyy.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: ['/', '/contact'] }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/galleryImages/`,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
