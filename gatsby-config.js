module.exports = {
  siteMetadata: {
    title: "art'Teryxx_WDD | Creative Thinking :: Focused on Results",
    author: "Patrick Cook",
    description: "web design, web developer, web development, web designer, javascript, js8, html, html5, css, css3, adobe CC, sketch, sketchapp, ios, app design, app dev, xcode"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#f9f7fa',
        theme_color: '#f9f7fa',
        display: 'minimal-ui',
        icon: 'src/assets/images/aBa_logo_oRANGJE_icon.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}