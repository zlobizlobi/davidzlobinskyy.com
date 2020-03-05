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
        <Highlight href="https://reactjs.org" target="_blank">
          React
        </Highlight>{' '}
        and{' '}
        <Highlight href="https://gatsbyjs.org" target="_blank">
          Gatsby
        </Highlight>
        .
      </Biography>
      <Biography>
        Besides coding I love to travel, rediscover myself and write raps.
        Someone once said to me: "The meaning of life is to give life meaning".
      </Biography>
      <IconContainer>
        <a href="https://linkedin.com/in/david-zlobinskyy" target="_blank">
          <FiLinkedin />
        </a>
        <a href="https://github.com/zlobizlobi" target="_blank">
          <FiGithub />
        </a>
      </IconContainer>
    </Container>
  </IconContext.Provider>
);
