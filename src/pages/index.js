import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

export default function IndexPage({ data }) {
	return (
		<>
			<SEO title="Home" />
			<Hero />
		</>
	);
}
