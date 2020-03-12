import React from 'react';
import styled from 'styled-components';
import { Text as TextComponent } from './text';
import amsterdamIcon from '../assets/holland.svg';

export const FooterComponent = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.color.primary};
  border-top: 1px solid ${({ theme }) => theme.color.secondary};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled(TextComponent)`
  display: flex;
  align-items: center;
`;

interface IProps {
  appTheme: string;
}

export const Footer: React.FC<IProps> = ({ appTheme }) => (
  <FooterComponent>
    <Container>
      <Text>
        Made with &nbsp;
        <span role="img" aria-label={appTheme ? 'Red heart' : 'White heart'}>
          ❤️ &nbsp;
        </span>
        in &nbsp;
        <img src={amsterdamIcon} style={{ width: '25px', height: '25px' }} />
      </Text>
    </Container>
  </FooterComponent>
);
