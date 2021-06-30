import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import ImgComponent from 'gatsby-image';
import { media } from '../styles/media';

export default function WorkCard({ imgSrc, workInformation, ...props }) {
  return (
    <a {...props}>
      <Container>
        <Img fluid={imgSrc} />
        <Overlay>
          <StyledText>{workInformation}</StyledText>
        </Overlay>
      </Container>
    </a>
  );
}

const Overlay = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: all 0.2s ease;
  background-color: #fff;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const StyledText = styled(Text)`
  color: #ed1c24;
  font-size: 14px;
  font-weight: 500;
`;

const Container = styled.span`
  display: flex;
  justify-content: center;
  background-color: white;
  border: 3px solid #fff;
  padding: 40px 60px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  border-radius: 5px;

  :hover {
    ${Overlay} {
      opacity: 1;
    }

    ${media.md(`
      transform: scale(1.1);
    `)}
  }
`;

const Img = styled(ImgComponent).attrs({
  imgStyle: {
    objectFit: 'contain',
  },
})`
  width: 150px;
  height: 150px;
`;
