import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const FixedImage = ({ imageName, ...restProps }) => (
    <StaticQuery
        query={graphql`
            query {
                allImageSharp {
                    edges {
                        node {
                            fixed {
                                originalName
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        `}
        render={data => {
            const image = data.allImageSharp.edges.find(
                edge => edge.node.fixed.originalName === imageName
            );
            if (!image) return null;
            return <Img fixed={image.node.fixed} {...restProps} />;
        }}
    />
);

FixedImage.propTypes = {
    imageName: PropTypes.string.isRequired,
};

export default FixedImage;
