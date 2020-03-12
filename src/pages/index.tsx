import React, { useRef, useState, useEffect } from 'react';
import * as easings from 'd3-ease';
import { graphql, useStaticQuery } from 'gatsby';
import styled, { keyframes, css } from 'styled-components';
import { FluidObject } from 'gatsby-image';
import { useSpring, animated } from 'react-spring';
import { Trail } from 'react-spring/renderprops';
import { Layout, Hero, Text, WorkCase } from 'components';
import { media } from 'styles';
import { getItemFromImage } from 'utils';
import { SEO } from '../components';
import { MdMouse } from 'react-icons/md';

const Section = styled.section`
  padding: 0 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:first-child {
    margin: 0 auto;
    min-height: 100vh;
    max-width: 900px;
    justify-content: space-around;
  }

  ${media.md(`
    padding: 0;
  `)}
`;

const Greeting = styled(Text)`
  font-size: 22px;
  align-self: flex-start;
  margin-bottom: 45px;

  ${media.md(`
      font-size: 30px;
      padding-left: 100px;
  `)}
`;

const WorkCasesContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 100px;

  > a {
    &:last-child {
      margin: 0;
    }

    margin-bottom: 20px;

    ${media.sm(`
      margin: 10px;
    `)}
  }
`;

export const Button = styled.button`
  display: none;

  ${media.md(`

  @keyframes opacity {
    from { opacity: 0; }
    to { left: 1; }
  }

    display: inline;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;

    > svg {
      opacity: 1;
      font-size: 20px;
      animation: opacity 1s alternate infinite;
    }
  `)}
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

interface IImage {
  id: string;
  childImageSharp: {
    id: string;
    fluid: FluidObject;
  };
}

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile {
        nodes {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const {
    allFile: { nodes: images },
  } = data;

  let scrollRef = useRef<number>(null!);

  const [isFaded, setFaded] = useState<boolean>(false);

  const handleScroll = (e: any) => {
    const window = e.currentTarget;

    if (scrollRef > window.scrollY) {
      setFaded(false);
    }

    if (scrollRef < window.scrollY) {
      setFaded(true);
    }

    scrollRef = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  const workCases = images.map((image: IImage) => {
    const { href, workInformation } = getItemFromImage(
      image.childImageSharp.fluid.src
    );

    return (
      <WorkCase
        href={href}
        key={image.id}
        target="_blank"
        rel="noopener noreferrer"
        alt={workInformation}
        imgSrc={image.childImageSharp.fluid}
        workInformation={workInformation}
      />
    );
  });

  const animationHero = useSpring({
    config: {
      duration: 500,
      mass: 500,
      friction: 100,
      tension: 300,
      easing: easings.easeCubicInOut,
    },
    transform: isFaded ? 'translate3d(0,-500px,0)' : 'translate3d(0,0px,0)',
    opacity: isFaded ? 0 : 1,
  });

  return (
    <Layout>
      <SEO
        title="Hello"
        description="My name is David Zlobinskyy. I do Frontend Webdevelopment. Having 2 years of experience, I like designing web-applications &
        building them using React and Gatsby."
        lang="en"
        meta={[]}
      />
      <Section id="home" isFaded={isFaded}>
        <animated.div
          style={{
            ...animationHero,
            width: '100%',
            marginTop: '60px',
          }}
        >
          <Greeting>
            Hi friend{' '}
            <span role="img" aria-label="hand">
              👋
            </span>
            ,
          </Greeting>
          <Hero />
        </animated.div>
        <Button>
          <ButtonTextContainer>
            <span>Scroll down</span>
            <span>to discover more</span>
          </ButtonTextContainer>
          <MdMouse />
        </Button>
      </Section>
      <Section id="projects">
        <WorkCasesContainer>
          <Trail
            config={{
              mass: 1,
              friction: 30,
              tension: 400,
              delay: !isFaded ? 0 : 900,
            }}
            items={workCases}
            keys={item => item.key}
            from={{
              opacity: 0,
              transform: isFaded ? 'translateY(5%)' : 'translateY(-50%)',
            }}
            to={{
              opacity: isFaded ? 1 : 0,
              transform: isFaded ? 'translateY(5%)' : 'translateY(-50%)',
            }}
          >
            {item => props => (
              <animated.div style={{ ...props, margin: '10px' }}>
                {item}
              </animated.div>
            )}
          </Trail>
        </WorkCasesContainer>
      </Section>
    </Layout>
  );
};

export default IndexPage;
