const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const PostTemplate = path.resolve('./src/templates/PostTemplate.js');

	const { errors, data } = await graphql(`
		{
			allMdx(
				filter: { frontmatter: { published: { eq: true } } }
				sort: { fields: [frontmatter___date], order: DESC }
			) {
				nodes {
					fields {
						slug
					}
				}
			}
		}
	`);
	if (errors) throw (new Error('There was an Error 🚨🚨🚨'), errors);

	const posts = data.allMdx.nodes;

	posts.forEach(post => {
		createPage({
			path: post.fields.slug,
			component: PostTemplate,
			context: { slug: post.fields.slug },
		});
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === 'Mdx') {
		// used if no slug is specified in frontmatter
		const generatedSlug = createFilePath({ node, getNode });

		createNodeField({
			name: 'slug',
			node,
			value: node.frontmatter.slug || generatedSlug,
		});
	}
};
