import React from 'react';
import styled from 'styled-components';

const headingConstant = 2.111;
const headingRelativeSizes = {
	h1: 5 / 5,
	h2: 3 / 5,
	h3: 2 / 5,
	h4: 0 / 5,
	h5: -1 / 5,
	h6: -1.5 / 5,
};
const headingSizes = Object.keys(headingRelativeSizes).map(
	h => headingRelativeSizes[h] * headingConstant
);
const headingColors = {
	h1: 'grey900',
	h2: 'grey800',
	h3: 'grey700',
	h4: 'grey600',
	h5: 'grey500',
	h6: 'grey400',
};

const HStyles = styled.h1`
	font-size: ${headingSizes.h1};
	font-size: ${({ as }) => as && `${headingSizes[as]}`};
	color: var(--grey-900);
	color: ${({ as, theme }) => as && theme[headingColors[as]]};
	padding: 0;
	margin: 0;
	margin-bottom: ${({ theme }) => theme.marginBottom};
	font-weight: 600;
	text-rendering: optimizeLegibility;
	line-height: 1.1;
`;

export default function H(props) {
	return <HStyles {...props} />;
}
