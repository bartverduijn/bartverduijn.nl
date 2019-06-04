import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledHeader = styled.header`
    border-top: 8px solid #3525e6;
    max-width: 940px;
    margin: 0 auto;
    display: flex;
    div:nth-child(1) {
        margin-right: 20px;
        h1 {
            display: block;
            font-size: 40px;
        }
    }
    div:nth-child(2) {
        h1 {
            display: block;
            font-size: 16px;
        }
        a {
            display: block;
            font-size: 16px;
        }
    }
`;

const Header = () => (
    <StyledHeader>
        <div>
            <h1>test</h1>
        </div>
        <div>
            <h1>
                <Link to="/">Bart Verduijn</Link>
            </h1>
            <a href="mailto:bart.verduijn@gmail.com?subject=👋%20from%20[insert name]">
                bart.verduijn@gmail.com
            </a>
            <a href="/path/to/my/resume.pdf" download>
                Resume
            </a>
        </div>
    </StyledHeader>
);

export default Header;
