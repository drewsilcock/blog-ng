/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Drew Silcock • stream! { consciousness }",
    description:
      "Personal site for technical musings, tips, tutorials & experiments.",
    siteUrl: "https://ng.drewsilcock.co.uk", // full path to blog - no ending slash
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": "AuthorYaml",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        quality: 100,
        stripMetadata: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: path.join(__dirname, "src", "blog"),
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Drew Silcock",
        short_name: "Drew Silcock",
        start_url: "/",
        background_color: "#191b1f",
        theme_color: "#fff",
        display: "standalone",
        icon: "static/media/icon.png",
        cache_busting_mode: "none",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/", "/blog/*", "/about/", "/tags/", "/tags/*", "/archive/"],
        workboxConfig: {
          globPatterns: ["**/*"],
        },
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1rem",
            },
          },
          "gatsby-remark-autolink-headers", // This must come before 'gatsby-remark-prismjs'
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: "›", // This is non-ascii U+203A: https://graphemica.com/%E2%80%BA
              showLineNumbers: true,
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          "gatsby-remark-abbr",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2000,
              quality: 100,
            },
          },
          {
            resolve: "gatsby-remark-katex",
            options: {
              strict: "error",
            },
          }
        ],
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://ng.drewsilcock.co.uk",
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-yaml",
    "gatsby-plugin-feed",
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("postcss-color-function"),
          require("cssnano")(),
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "roboto",
          "ubuntu mono",
        ],
        display: "swap",
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-XXXX-Y",
        // Puts tracking script in the head instead of the body
        head: true,
        // IP anonymization for GDPR compliance
        anonymize: true,
        // Disable analytics for users with `Do Not Track` enabled
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**"],
        // Specifies what percentage of users should be tracked
        sampleRate: 100,
        // Determines how often site speed tracking beacons will be sent
        siteSpeedSampleRate: 10,
      },
    },
  ],
};
