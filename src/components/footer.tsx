import React from 'react';
import styled from 'styled-components';
import { Text } from './text';
import amsterdamIcon from '../assets/amsterdam.svg';

export const FooterComponent = styled.footer`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.color.secondary};
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: 'column';
`;

interface IProps {
  appTheme: string;
}

export const Footer: React.FC<IProps> = ({ appTheme }) => (
  <FooterComponent>
    <Container>
      <Text>
        Made with{' '}
        <span role="img" aria-label={appTheme ? 'Red heart' : 'White heart'}>
          🤍
        </span>
        in <img src={amsterdamIcon} style={{ width: '30px', height: '30px' }} />{' '}
      </Text>
    </Container>
  </FooterComponent>
);
