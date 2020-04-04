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
import { FaSpotify, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export const Hero: React.FC = () => (
  <IconContext.Provider
    value={{
      color: 'rgb(211,211,211)',
      size: '23px',
    }}
  >
    <Container>
      <Name>my name is David Zlobinskyy,</Name>
      <Name>some call me zlob,</Name>
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
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/zlobizlobi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/zlobbbi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://open.spotify.com/user/hhh0nkzioltxef8v13g903hhk?si=Zldgm6fiQs2_ipJhd14tVA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify />
        </a>
      </IconContainer>
    </Container>
  </IconContext.Provider>
);
