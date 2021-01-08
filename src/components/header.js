import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderStyles = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: baseline;

	a {
		text-decoration: none;
	}

	h1 {
		padding: 32px 0;
		font-size: 24px;
		font-weight: 800;
		line-height: 0;
		color: var(--color-gray-800);
	}

	nav a {
		font-size: 18px;
		font-weight: 600;
		color: var(--color-gray-400);

		&:hover {
			color: var(--color-gray-800);
		}
	}
`;

export default function Header() {
	return (
		<HeaderStyles>
			<Link to="/">
				<h1>Bart Verduijn</h1>
			</Link>
			<nav>
				<Link to="/about">About</Link>
			</nav>
		</HeaderStyles>
	);
}
