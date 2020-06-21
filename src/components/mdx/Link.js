import styled from 'styled-components';

export default styled.a`
	margin: 0;
	padding: 0;
	background-color: transparent;
	color: ${({ theme }) => theme.blue500};
	text-decoration: none;
	font-weight: 400;

	&:hover,
	&:active {
		text-decoration: underline 2px solid;
		outline-width: 0;
	}
`;
