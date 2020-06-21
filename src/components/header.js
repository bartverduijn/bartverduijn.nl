import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: ${({ theme }) => theme.marginBottom} 0;

	h1 {
		color: ${({ theme }) => theme.grey500};
		font-size: 1rem;
		font-weight: 700;
		line-height: 0;
	}

	button {
		background: none;
		border: none;

		svg {
			fill: currentColor;
			color: ${({ theme }) => theme.grey500};
		}

		&:hover svg {
			color: ${({ theme }) => theme.grey900};
		}
	}
`;

export default function Header() {
	return (
		<HeaderStyles>
			<h1>Bart Verduijn</h1>
			<button type="button">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2 6H22V7H2V6ZM2 12H22V13H2V12ZM22 18H2V19H22V18Z"
						className="fill-current text-gray-900"
					/>
				</svg>
			</button>
		</HeaderStyles>
	);
}
