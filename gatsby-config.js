const siteMetadata = {
	title: 'Bart Verduijn | MSc Cognitive Science & Artificial Intelligence.',
	description:
		'CV Bart Verduijn, MSc Cognitive Science & Artificial Intelligence and IT specialist @ Brunel. Interested in Data Science, Machine Learning & Business Analysis',
	author: 'Bart Verduijn',
};

module.exports = {
	siteMetadata,
	plugins: [
		'gatsby-plugin-styled-components',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		// 'gatsby-remark-images',
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				extensions: ['.mdx', '.md'],
				gatsbyRemarkPlugins: [
					{
						resolve: 'gatsby-remark-images',
						options: { maxWidth: 1500 },
					},
				],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: { path: `${__dirname}/src/posts`, name: 'posts' },
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: { path: `${__dirname}/src/pages`, name: 'pages' },
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: { path: `${__dirname}/src/images`, name: 'images' },
		},
		// {
		// 	resolve: 'gatsby-plugin-manifest',
		// 	options: {
		// 		name: 'Bart Verduijn',
		// 		short_name: 'Bart',
		// 		start_url: '/',
		// 		background_color: '#663399',
		// 		theme_color: '#663399',
		// 		display: 'minimal-ui',
		// 		icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
		// 	},
		// },
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
		'gatsby-plugin-react-helmet',
	],
};
