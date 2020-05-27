import { graphql, useStaticQuery } from 'gatsby';

export default function useSiteMetaData() {
	const SITE_METADATA_QUERY = useStaticQuery(graphql`
		query SITE_METADATA_QUERY {
			site {
				siteMetadata {
					author
					description
					title
				}
			}
		}
	`);
	return SITE_METADATA_QUERY.site.siteMetadata;
}
