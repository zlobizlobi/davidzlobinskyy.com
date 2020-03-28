import React from 'react';
import styled from 'styled-components';
import { Text as TextComponent } from './text';
import amsterdamIcon from 'images/holland.svg';

export const FooterComponent = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.color.primary};
  border-top: 2px solid ${({ theme }) => theme.color.secondary};
`;

const Text = styled(TextComponent)`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 14px;

  &:first-child {
    margin-bottom: 10px;
  }
`;

interface IProps {
  appTheme: string;
}

// CHECK DONE

export const Footer: React.FC<IProps> = ({ appTheme }) => (
  <FooterComponent>
    <Text>
      Made with&nbsp;
      <span role="img" aria-label={appTheme ? 'Red heart' : 'White heart'}>
        ❤️&nbsp;
      </span>
      in&nbsp;
      <img src={amsterdamIcon} style={{ width: '25px', height: '25px' }} />
    </Text>
    <Text>© 2020 David Zlobinskyy.</Text>
  </FooterComponent>
);
