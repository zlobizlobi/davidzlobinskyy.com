import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { media } from '../styles/media';
import Text from './Text';

export default function Hero() {
  return (
    <IconContext.Provider
      value={{
        color: 'white',
        size: '23px',
      }}
    >
      <Container>
        <Greeting>
          Welcome my friend{' '}
          <span role="img" aria-label="hand">
            🖖,
          </span>
        </Greeting>
        <Greeting>my name is David Zlobinskyy,</Greeting>
        <Zlob>but some call me zlob or even zlobi,</Zlob>
        <Developer>
          I do Frontend Webdevelopment{' '}
          <span style={{ fontSize: '14px', fontWeight: 300 }}>
            ( and Ux/Ui Design )
          </span>
        </Developer>
        <Biography>
          For this I use different kind of tools that cross my path like{' '}
          <Highlight href="https://reactjs.org">React</Highlight>,{' '}
          <Highlight href="https://gatsbyjs.org">Gatsby</Highlight>,{' '}
          <Highlight href="https://www.typescriptlang.org/">
            Typescript
          </Highlight>
          , <Highlight href="https://www.figma.com/">Figma</Highlight>,{' '}
          <Highlight href="https://nextjs.org/">NextJs</Highlight>, but
          generally speaking I have no trouble adjusting quickly to various
          context's within the Javascript paradigm.
        </Biography>
        <Biography>
          Besides that, I travel, meet strangers and shoot{' '}
          <Highlight>pictures</Highlight> wherever I am with an analogue Minolta
          X-300.
          <br />
          <br />
          Also, I play 5-minute blitz chess on{' '}
          <Highlight href="https://lichess.org/@/zlobi">lichess</Highlight>.
        </Biography>
        <IconContainer>
          <a href="https://linkedin.com/in/david-zlobinskyy">
            <FaLinkedin color="#243141" />
          </a>
          <a href="https://github.com/zlobizlobi">
            <FaGithub color="#243141" />
          </a>
        </IconContainer>
      </Container>
    </IconContext.Provider>
  );
}

const Highlight = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
  className: 'highlight',
})`
  transition: color 0.2s ease;
  cursor: pointer;
  text-decoration: underline;
  color: #243141;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Greeting = styled(Text)`
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: 900;

  ${media.md(`
    font-size: 30px;
  `)}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Zlob = styled(Text)`
  font-size: 19px;

  &:nth-child(2) {
    margin-top: 10px;
  }

  > ${Highlight} {
    && {
      color: #243141;
      padding: 0;
    }
  }

  ${media.md(`
      font-size: 18px;
  `)}
`;

const Developer = styled(Text)`
  font-size: 24px;
  margin: 30px 0;
  font-weight: 900;

  ${media.md(`
      font-size: 30px;
  `)}
`;

const Biography = styled(Text)`
  font-size: 16px;
  margin-bottom: 30px;
`;

const IconContainer = styled.div`
  display: flex;
  margin-top: 45px;

  > a {
    margin-right: 15px;
  }

  > a:last-child {
    margin: 0;
  }
`;
