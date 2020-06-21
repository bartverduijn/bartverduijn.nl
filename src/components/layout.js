import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { MDXProvider } from '@mdx-js/react';
import 'normalize.css';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header';
import mdxComponents from './mdx';

const theme = {
	marginBottom: '2.16612rem',
	fontSize: '18px',
	grey900: 'hsl(209, 61%, 16%)',
	grey800: 'hsl(211, 39%, 23%)',
	grey700: 'hsl(209, 34%, 30%)',
	grey600: 'hsl(209, 28%, 39%)',
	grey500: 'hsl(210, 22%, 49%)',
	grey400: 'hsl(209, 23%, 60%)',
	grey300: 'hsl(211, 27%, 70%)',
	grey200: 'hsl(210, 31%, 80%)',
	grey100: 'hsl(212, 33%, 89%)',
	grey000: 'hsl(210, 36%, 96%)',
	blue900: 'hsl(245, 100%, 27%)',
	blue700: 'hsl(245, 79%, 52%)',
	blue500: 'hsl(243, 94%, 66%)',
};

const GlobalStyles = createGlobalStyle`
	html {
		font-size: ${theme.fontSize};
		line-height: 1.625;
		font-family: 'system-ui', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
		box-sizing: border-box;
		overflow-y: scroll;
	}
	*, *:before, *:after {
        box-sizing: inherit;
    }
	body {
		color: ${theme.grey700};
		font-weight: 300;
		word-wrap: break-word;
		font-kerning: normal;
		font-feature-settings: 'kern', 'liga', 'clig', 'calt';
	}
`;

const ContainerStyles = styled.div`
	max-width: 48rem;
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
			<ThemeProvider theme={theme}>
				<MDXProvider components={mdxComponents}>
					<ContainerStyles>
						<Header />
						{children}
					</ContainerStyles>
				</MDXProvider>
			</ThemeProvider>
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
