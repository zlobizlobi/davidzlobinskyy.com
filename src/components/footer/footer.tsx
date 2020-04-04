import React from 'react';
import { Text, Container } from './styles';
import amsterdamIcon from 'images/holland.svg';

interface IProps {
  appTheme: string;
}

export const Footer: React.FC<IProps> = ({ appTheme }) => (
  <Container>
    <Text>
      Made with&nbsp;
      <span role="img" aria-label={appTheme ? 'Red heart' : 'White heart'}>
        ❤️&nbsp;
      </span>
      in&nbsp;
      <img src={amsterdamIcon} style={{ width: '25px', height: '25px' }} />
    </Text>
    <Text>© 2020 David Zlobinskyy.</Text>
  </Container>
);
