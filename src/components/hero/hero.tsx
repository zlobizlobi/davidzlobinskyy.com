import React from 'react';
import {
  Container,
  Name,
  Developer,
  Highlight,
  Biography,
  IconContainer,
} from './styles';
import { IconContext } from 'react-icons';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { MdMouse } from 'react-icons/md';

import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  align-items: center;
  margin: 70px 0;

  > svg {
    font-size: 20px;
    opacity: 0.7;
  }
`;

export const ButtonTextContainer = styled.span`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.secondary};
  align-items: flex-end;
  margin-right: 5px;

  > :nth-child(1) {
    font-size: 14px;
    font-weight: 500;
  }

  > :nth-child(2) {
    font-size: 14px;
    opacity: 0.7;
    font-weight: 200;
  }
`;

export const Hero: React.FC = () => (
  <IconContext.Provider
    value={{
      color: 'rgb(211,211,211)',
      size: '23px',
    }}
  >
    <Container>
      <Name>my name is David Zlobinskyy,</Name>
      <Name style={{ marginTop: '20px' }}>some call me zlob,</Name>
      <Developer>I do Frontend Webdevelopment</Developer>
      <Biography>
        Having 2 years of experience, I like designing web-applications &
        building them using{' '}
        <Highlight
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </Highlight>{' '}
        and{' '}
        <Highlight
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </Highlight>
        .
      </Biography>
      <Biography>
        Besides coding I love to travel, rediscover myself and write raps.
        Someone once said to me: "The meaning of life is to give life meaning".
      </Biography>
      <IconContainer>
        <a
          href="https://linkedin.com/in/david-zlobinskyy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://github.com/zlobizlobi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
        </a>
      </IconContainer>
      <Button>
        <ButtonTextContainer>
          <span>Scroll down</span>
          <span>to discover more</span>
        </ButtonTextContainer>
        <MdMouse />
      </Button>
    </Container>
  </IconContext.Provider>
);
