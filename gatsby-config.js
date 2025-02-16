module.exports = {
  siteMetadata: {
    siteUrl: "https://devfest2025.gdgnantes.com",
    title: "Devfest Nantes 2025",
    image: "/images/social-share.jpg",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-theme-material-ui",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-graphql-config",
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://devfest2025.gdgnantes.com`,
      },
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `fr`,
        configPath: require.resolve(`./locales/config.json`),
        prefixDefault: false,
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-i18next`,
      options: {
        locales: `./locales`,
        i18nextOptions: {
          ns: ["translation"],
        },
      },
    },

    // {
    //   resolve: "gatsby-plugin-google-gtag",
    //   options: {
    //     trackingIds: ["G-D66NP8CLV0"],
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/images/maskable_icon.png",
        icon_options: {
          purpose: `any maskable`,
        },
        name: `Devfest Nantes 2025`,
        short_name: `Devfest Nantes`,
        start_url: `/`,
        background_color: `#0e1324`,
        theme_color: `#22263f`,
        display: `standalone`,
        description: `Informations générales sur le Devfest Nantes`,
        lang: `fr`,
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            name: `Devfest Nantes 2025`,
            short_name: `Devfest Nantes`,
            description: `General informations about the Devfest Nantes.`,
          },
          {
            start_url: `/fr/`,
            lang: `fr`,
            description: `Informations générales sur le Devfest Nantes.`,
          },
        ],
      },
    },
    // "gatsby-plugin-offline",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/layout/mdx.tsx"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-remote-images`,
    //   options: {
    //     nodeType: "SpeakersYaml",
    //     imagePath: "photoUrl",
    //   },
    // },
  ],
  trailingSlash: "always",
};
