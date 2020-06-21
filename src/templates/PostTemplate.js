import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

export const GET_POST_BY_SLUG_QUERY = graphql`
	query GET_POST_BY_SLUG_QUERY($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			body
			frontmatter {
				date(formatString: "DD/MM/YYYY")
				title
			}
		}
	}
`;

export default function PostTemplate({ data }) {
	const { frontmatter, body } = data.mdx;
	return (
		<article>
			{/* <h1>{frontmatter.title}</h1>
			<date>{frontmatter.date}</date> */}
			<MDXRenderer>{body}</MDXRenderer>
		</article>
	);
}
