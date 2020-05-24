module.exports = {
    siteMetadata: {
        title:
            'Bart Verduijn | MSc Cognitive Science & Artificial Intelligence.',
        description:
            'CV Bart Verduijn, MSc Cognitive Science & Artificial Intelligence and IT specialist @ Brunel. Interested in Data Science, Machine Learning & Business Analysis',
        author: 'Bart Verduijn',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Bart Verduijn',
                short_name: 'Bart',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
