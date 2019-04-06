module.exports = {
  // サイトのメタデータを修正
  siteMetadata: {
    title: `サンプルサークルのお品書き`,
    author: `サンプル執筆会`,
    description: `さまざまなテクノロジーを紹介する同人誌を発行する同人サークルです`,
    siteUrl: `https://example.com`,
    social: {
      twitter: `sample_circle`,
    },
  },
  // プラグインの設定
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Googleアナリティクスの設定。トラッキングID（UA-000000-2など）を入れる
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    // Webアプリマニフェスト（スマホのホーム画面に追加したときの設定）
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `サンプルサークルのお品書き`,
        short_name: `サンプルサークル`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
