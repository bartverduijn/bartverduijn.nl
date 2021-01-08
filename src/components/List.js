import styled from 'styled-components';

export default styled.ul`
	text-align: left;
	padding: 0;
	margin: 0;
	margin-left: 1.625rem;
	margin-bottom: ${({ theme }) => theme.marginBottom};
	list-style-position: outside;

	li::marker {
		color: ${({ theme }) => theme.blue500};
	}

	li > p {
		margin-bottom: calc(${({ theme }) => theme.marginBottom} / 2);
	}
`;
