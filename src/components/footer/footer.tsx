import React from 'react';
import { Text, Container } from './styles';
import amsterdamIcon from 'images/holland.svg';

interface IProps {
  appTheme: string;
}

export const Footer: React.FC<IProps> = () => (
  <Container>
    <Text>
      Made in&nbsp;
      <img src={amsterdamIcon} style={{ width: '20px', height: '20px' }} />
    </Text>
    <Text>© 2020 davidzlobinskyy.com</Text>
  </Container>
);
