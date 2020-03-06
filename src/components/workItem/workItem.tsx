import React from 'react';
import { Container } from './styles';
import Img, { FluidObject } from 'gatsby-image';

interface IProps {
  imgSrc: FluidObject;
}

export const WorkItem: React.FC<IProps> = ({ imgSrc }) => (
  <Container>
    <Img
      fluid={imgSrc}
      imgStyle={{
        objectFit: 'contain',
      }}
    />
  </Container>
);
