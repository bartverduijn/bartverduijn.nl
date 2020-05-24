import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

export default function Layout({ children }) {
	return (
		<div className="antialiased">
			<div className="max-w-4xl mx-auto px-6 mb-10">
				<Header />
				{children}
			</div>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
