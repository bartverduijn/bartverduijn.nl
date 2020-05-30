import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import useSiteMetaData from '../hooks/useSiteMetaData';
import SEO from '../components/SEO';

export const GET_HI_QUERY = graphql`
	query GET_HI_QUERY {
		mdx(fields: { slug: { eq: "/hi/" } }) {
			body
			frontmatter {
				date(formatString: "DD/MM/YYYY")
			}
		}
	}
`;

export default function IndexPage({ data }) {
	const { title, description, author } = useSiteMetaData();
	const { body } = data.mdx;
	return (
		<>
			<SEO title="Home" />
			<main className="mt-12">
				<MDXRenderer>{body}</MDXRenderer>
			</main>
		</>
	);
}
