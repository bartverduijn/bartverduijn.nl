import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledHeader = styled.header`
    border-top: 8px solid ${props => props.theme.purple};
    border-image: linear-gradient(
            45deg,
            ${props => props.theme.purple},
            ${props => props.theme.teal}
        )
        8 0 0 0;
    height: 100%;
    width: 100%;
`;

const HeaderContainer = styled.div`
    max-width: 300px;
    margin: 24px auto;
    display: flex;
    align-items: center;
    h1 {
        font-family: ${props => props.theme.montserrat};
        font-size: 14px;
    }
    ul {
        padding: 0;
        margin: 0;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        li {
            list-style: none;
            h1 {
                padding: none;
                margin: 0;
                a {
                    text-decoration: none;
                    margin-bottom: -2px;
                }
            }
            a {
                display: block;
                color: ${props => props.theme.black};
                font-weight: 600;
            }
        }
    }
`;

const ImageContainer = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #e5e5e5;
    margin-right: 16px;
    ${'' /* box-shadow: inset 0 3px 4px rgba(0, 0, 0, 0.3); */};
`;

const Header = () => (
    <StyledHeader>
        <HeaderContainer>
            <ImageContainer>
                <StaticQuery
                    query={graphql`
                        query {
                            file(relativePath: { eq: "bart.jpg" }) {
                                childImageSharp {
                                    fixed(height: 60, width: 60) {
                                        ...GatsbyImageSharpFixed
                                    }
                                }
                            }
                        }
                    `}
                    render={({ file }) => (
                        <Img fixed={file.childImageSharp.fixed} />
                    )}
                />
            </ImageContainer>
            <ul>
                <li>
                    <h1>
                        <Link to="/">Bart Verduijn</Link>
                    </h1>
                </li>
                <li>
                    <a href="mailto:bart.verduijn@gmail.com?subject=👋%20from%20[insert name]">
                        bart.verduijn@gmail.com
                    </a>
                </li>
                <li>
                    <a href="/path/to/my/resume.pdf" download>
                        Resume
                    </a>
                </li>
            </ul>
        </HeaderContainer>
    </StyledHeader>
);

export default Header;
