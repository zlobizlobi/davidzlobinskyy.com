import React from 'react';
import { Container, Name, Developer, Highlight, Biography } from './styles';
import { IconContext } from 'react-icons';

export const Hero = () => (
  <IconContext.Provider>
    <Container>
      <Name>my name is David Zlobinskyy,</Name>
      <Developer>I do Frontend Webdevelopment</Developer>
      <Biography>
        Having 2 years of experience, I like designing & building apps using{' '}
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
    </Container>
  </IconContext.Provider>
);
