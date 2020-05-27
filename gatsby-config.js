const siteMetadata = {
	title: 'Bart Verduijn | MSc Cognitive Science & Artificial Intelligence.',
	description:
		'CV Bart Verduijn, MSc Cognitive Science & Artificial Intelligence and IT specialist @ Brunel. Interested in Data Science, Machine Learning & Business Analysis',
	author: 'Bart Verduijn',
};

module.exports = {
	siteMetadata,
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: { path: `${__dirname}/src/posts`, name: 'posts' },
		},
		{ resolve: 'gatsby-plugin-mdx', options: ['.mdx', '.md'] },
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-postcss',
		{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				printRejected: false,
				develop: false,
				tailwind: true,
				// whitelist: ['whitelist'], // Don't remove this selector
				// ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
				// purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
			},
		},
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
