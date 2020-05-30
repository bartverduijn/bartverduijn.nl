import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';
import Header from './Header';

const components = {
	p: ({ children }) => (
		<p className="mb-6 sm:mb-8 text-lg sm:text-xl leading-relaxed font-light text-gray-800">
			{children}
		</p>
	),
	h1: ({ children }) => (
		<h1 className="mt-2 mb-4 text-4xl font-normal text-gray-900">
			{children}
		</h1>
	),
	h2: ({ children }) => (
		<h2 className="mt-16 mb-4 text-3xl font-medium text-indigo-700">
			{children}
		</h2>
	),
	h3: ({ children }) => (
		<h3 className="mt-8 mb-3 text-2xl font-medium text-gray-900">
			{children}
		</h3>
	),
	a: ({ children }) => (
		<a className="font-normal underline text-indigo-600">{children}</a>
	),
};

export default function Layout({ children }) {
	return (
		<div className="max-w-3xl mx-auto px-6">
			<MDXProvider components={components}>
				<Header />
				{children}
			</MDXProvider>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
