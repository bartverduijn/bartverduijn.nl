import React from 'react';
import P from './Paragraph';
import H from './Heading';
import A from './Link';
import UL from './List';

export default {
	h1: props => <H as="h1" {...props} />,
	h2: props => <H as="h2" {...props} />,
	h3: props => <H as="h3" {...props} />,
	h4: props => <H as="h4" {...props} />,
	h5: props => <H as="h5" {...props} />,
	h6: props => <H as="h6" {...props} />,
	p: props => <P {...props} />,
	a: props => <A {...props} />,
	ul: props => <UL {...props} />,
};
