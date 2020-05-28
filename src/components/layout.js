import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';
import Header from './Header';

const components = {
	p: ({ children }) => (
		<p className="text-base sm:text-lg text-gray-700 font-light mt-6">
			{children}
		</p>
	),
};

export default function Layout({ children }) {
	return (
		<div className="antialiased">
			<div className="max-w-3xl mx-auto px-6">
				<MDXProvider components={components}>
					<Header />
					{children}
				</MDXProvider>
			</div>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
