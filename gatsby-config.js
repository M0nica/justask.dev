module.exports = {
    siteMetadata: {
      title: 'justask.dev',
      description: 'Community powered answers to your dev questions'
    },
    plugins: [
        'gatsby-plugin-mdx',
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
              fonts: [
                'Inconsolata',
                'monospace',
                'source sans pro\:300,400,400i,700' 
              ]
            }
        },
        {
            resolve: 'gatsby-theme-seo', 
            options: {
                title: 'justask.dev',
                description: 'A website that provides answers to simple dev questions.',
                author: 'Rich Haines',
                siteUrl: 'https://justask.dev',
            }
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'pages',
            path: `${__dirname}/src/pages/`
          }
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/content/html`,
            name: 'html',
          },
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/content/css`,
            name: 'css',
          },
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/content/react`,
            name: 'react',
          },
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/content/gatsby`,
            name: 'gatsby',
          },
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/content/git`,
            name: 'gatsby',
          },
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/content/javascript`,
            name: 'gatsby',
          },
        },
        'gatsby-plugin-emotion',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-robots-txt'
    ]
  }