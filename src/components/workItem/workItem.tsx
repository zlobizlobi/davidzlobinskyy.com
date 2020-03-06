import React from 'react';
import { Container, Overlay, Text } from './styles';
import Img, { FluidObject } from 'gatsby-image';

interface IProps {
  imgSrc: FluidObject;
  workInformation: string;
}

export const WorkItem: React.FC<IProps> = ({ imgSrc, workInformation }) => (
  <Container>
    <Img
      fluid={imgSrc}
      imgStyle={{
        objectFit: 'contain',
      }}
    />
    <Overlay>
      <Text>{workInformation}</Text>
    </Overlay>
  </Container>
);
