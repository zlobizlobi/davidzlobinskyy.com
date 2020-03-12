import React from 'react';
import { Container, Overlay, Text, Anchor, Img } from './styles';
import { FluidObject } from 'gatsby-image';

interface IProps {
  imgSrc: FluidObject;
  workInformation: string;
}

export const WorkCase: React.FC<IProps> = ({
  imgSrc,
  workInformation,
  ...props
}) => (
  <Anchor {...props}>
    <Container>
      <Img fluid={imgSrc} />
      <Overlay>
        <Text>{workInformation}</Text>
      </Overlay>
    </Container>
  </Anchor>
);
