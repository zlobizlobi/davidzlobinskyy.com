import React from 'react';
import { IconContext } from 'react-icons';
import { FaSpotify, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Text } from 'components';
import styled from 'styled-components';
import { media } from 'styles';

export const Hero: React.FC = () => (
  <IconContext.Provider
    value={{
      color: 'rgb(211,211,211)',
      size: '23px',
    }}
  >
    <Container>
      <Greeting>
        Hi friend{' '}
        <span role="img" aria-label="hand">
          👋,
        </span>
      </Greeting>
      <Name>my name is David Zlobinskyy,</Name>
      <Name>some call me zlob,</Name>
      <Developer>I do Frontend Webdevelopment</Developer>
      <Biography>
        I like designing & building web-applications since some time already.
        For this I use different kind of tools that cross my path like{' '}
        <Highlight href="https://reactjs.org">React</Highlight>,{' '}
        <Highlight href="https://gatsbyjs.org">Gatsby</Highlight>,{' '}
        <Highlight href="https://gatsbyjs.org">Typescript</Highlight>,{' '}
        <Highlight href="https://gatsbyjs.org">AdobeXD</Highlight> and more.
      </Biography>
      <Biography>
        Besides busying myself with software development - I love to travel,
        rediscover myself and write raps. Someone once said to me: &apos;The
        meaning of life is to give life meaning&apos;.
      </Biography>
      <IconContainer>
        <a href="https://linkedin.com/in/david-zlobinskyy">
          <FaLinkedin />
        </a>
        <a href="https://github.com/zlobizlobi">
          <FaGithub />
        </a>
        <a href="https://instagram.com/zlobbbi">
          <FaInstagram />
        </a>
        <a href="https://open.spotify.com/user/hhh0nkzioltxef8v13g903hhk?si=Zldgm6fiQs2_ipJhd14tVA">
          <FaSpotify />
        </a>
      </IconContainer>
    </Container>
  </IconContext.Provider>
);

const Greeting = styled(Text)`
  margin-bottom: 40px;
  font-size: 24px;

  ${media.md(`
    font-size: 30px;
`)}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Name = styled(Text)`
  font-size: 19px;

  &:nth-child(2) {
    margin-top: 10px;
  }

  ${media.md(`
      font-size: 22px;
  `)}
`;

export const Developer = styled(Text)`
  font-size: 24px;
  margin: 30px 0;

  ${media.md(`
      font-size: 30px;
  `)}
`;

export const Biography = styled(Text)`
  font-size: 16px;
  margin-bottom: 30px;

  &:last-of-type {
    font-style: italic;
  }
`;

export const Highlight = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  padding-bottom: 1px;
  border-bottom: 2px solid black;
  transition: color 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.color.secondary};

  :hover {
    color: black;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  margin-top: 45px;

  > a {
    margin-right: 15px;
  }

  > a:last-child {
    margin: 0;
  }
`;
