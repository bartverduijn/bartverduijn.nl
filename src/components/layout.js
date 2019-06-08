import React from 'react';
import PropTypes from 'prop-types';
import { normalize } from 'styled-normalize';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';

const theme = {
    purple: 'hsl(263, 81%, 49%)',
    teal: 'hsl(185, 63%, 48%)',
    black: 'hsl(263, 61%, 16%)',
    montserrat: `'Montserrat', sans-serif`,
    arvo: `'Arvo', serif`,
};

const GlobalStyle = createGlobalStyle`
    ${normalize}
    @import url('https://fonts.googleapis.com/css?family=Arvo:700|Montserrat:400,600,700&display=swap');
    body {
        font-family: ${theme.montserrat};
        font-size: 14px;
        color: ${theme.black};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: ${theme.arvo};
    }
    hr {
        border-top: 1px solid #e5e5e5;
    }
`;

const Main = styled.main`
    max-width: 300px;
    margin: 16px auto;
`;

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <Header />
            <Main>{children}</Main>
        </>
    </ThemeProvider>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
