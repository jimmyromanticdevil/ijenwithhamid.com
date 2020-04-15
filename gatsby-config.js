const config = require('./config/website')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
  siteMetadata: {
    siteUrl:config.siteUrl + pathPrefix,
    title: config.siteTitle,
    author: config.author,
    description: config.siteDescription
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images/`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Source Sans Pro`,
            subsets: [`latin`],
            variants: [`300`, `300`, `600`, `600`],
            fontDisplay: `swap`
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: [
          "https://marketingplatform.google.com",
          "https://www.google.com",
          "https://www.google-analytics.com"
        ]
      }
    },
    {
      "resolve": `gatsby-plugin-manifest`,
      "options": {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        start_url: config.pathPrefix,
        background_color: config.background_color,
        theme_color: config.themeColor,
        display: "standalone",
        icons: [
          {
              src: "/favicons/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png"
          },
          {
              src: "/favicons/android-chrome-256x256.png",
              sizes: "256x256",
              type: "image/png"
          }
        ],
        theme_color: config.themeColor,
        background_color: config.background_color,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    }

  ],
}
