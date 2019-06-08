import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
// import SEO from '../components/seo';

const MainQuote = styled.h2`
    line-height: 1.5;
    font-size: 24px;
    .purple {
        color: ${props => props.theme.purple};
    }
    .teal {
        color: ${props => props.theme.teal};
    }
    a {
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    margin: 32px auto;
`;

const SubQuote = styled.a`
    display: block;
    color: ${props => props.theme.purple};
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
    margin-bottom: 24px;
`;

const SocialMedia = styled.ul`
    margin: 0 0 40px 0;
    padding: 0;
    display: flex;
    li {
        list-style: none;
        &:not(:last-child) {
            margin-right: 16px;
        }
        .linkedin,
        .github {
            height: 32px;
            width: 32px;
            border-radius: 50%;
            background-color: #e5e5e5;
        }
    }
`;

const IndexPage = () => (
    <Layout>
        {/* <SEO title="Home" /> */}
        <MainQuote>
            I am{' '}
            <a
                className="purple"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tilburguniversity.edu/nl/onderwijs/masteropleidingen/cognitive-science-and-artificial-intelligence"
            >
                Msc. Cognitive Science & Artificial Intelligence,
            </a>{' '}
            <a
                className="teal"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.daf.com/en"
            >
                Functional Application Manager at DAF,
            </a>{' '}
            and a really good friend.
        </MainQuote>
        <SubQuote>Let's be friends.</SubQuote>
        <SocialMedia>
            <li>
                <div className="linkedin" />
            </li>
            <li>
                <div className="github" />
            </li>
        </SocialMedia>
        <hr />
    </Layout>
);

export default IndexPage;
