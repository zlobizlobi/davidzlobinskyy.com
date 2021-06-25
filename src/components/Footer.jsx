import React from 'react';
import styled from 'styled-components';
import amsterdamIcon from '../images/holland.svg';
import Text from './Text';
import { media } from '../styles/media';

export default function Footer() {
  return (
    <Container>
      <StyledText>
        Made in&nbsp;
        <img src={amsterdamIcon} style={{ width: '20px', height: '20px' }} />
      </StyledText>
      <StyledText>© 2021 davidzlobinskyy.com</StyledText>
    </Container>
  );
}

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #f6f6f6;
  height: 65px;

  ${media.md(`
      flex-direction: row;
  `)}
`;

export const StyledText = styled(Text)`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 14px;
  color: #243141;

  ${media.md(`
    &:first-child {
      margin-right: 10px;
    }
  `)}
`;
