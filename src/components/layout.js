import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

export default function Layout({ children }) {
	return (
		<div className="antialiased">
			<div className="max-w-5xl mx-auto px-6">
				<Header />
				<main>{children}</main>
			</div>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
