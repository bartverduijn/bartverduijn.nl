import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import 'normalize.css';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Inter';
		font-style:  normal;
		font-weight: 400;
		font-display: swap;
		src: url('../fonts/Inter-Regular.woff2') format("woff2"),
			url('../fonts/Inter-Regular.woff') format("woff");
	}

	@font-face {
		font-family: 'Inter';
		font-style:  normal;
		font-weight: 700;
		font-display: swap;
		src: url('../fonts/Inter-Bold.woff2') format("woff2"),
			url('../fonts/Inter-Bold.woff') format("woff");
	}

	@font-face {
		font-family: 'Inter';
		font-style:  normal;
		font-weight: 800;
		font-display: swap;
		src: url('../fonts/Inter-ExtraBold.woff2') format("woff2"),
			url('../fonts/Inter-ExtraBold.woff') format("woff");
	}

	@font-face {
		font-family: 'Playfair Display';
		font-style:  normal;
		font-weight: 900;
		font-display: swap;
		src: url('../fonts/PlayfairDisplaySC-Black.woff2') format('woff2'),
			url('../fonts/PlayfairDisplaySC-Black.woff') format('woff');
	}

	html {
		font-size: 16px;
		box-sizing: border-box;
		--color-background: #FFFFFF;
		--color-primary: #6366F1;
		--color-gray-800: #1E293B;
		--color-gray-400: #94A3B8;
		--color-gray-300: #CBD5E1;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		padding: 0;
		margin: 0;
		font-family: 'Inter', i-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
		border-top: 8px solid var(--color-primary);
	}
`;

const ContainerStyles = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	padding: 0 1.5rem;
`;

export default function Layout({ children, title }) {
	return (
		<>
			<GlobalStyles />
			<Helmet>
				<title>{title}</title>
			</Helmet>

			<ContainerStyles>
				<Header />
				{children}
			</ContainerStyles>
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
