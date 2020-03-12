import React, { useRef, useState, useEffect } from 'react';
import * as easings from 'd3-ease';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { FluidObject } from 'gatsby-image';
import { useSpring, animated, config } from 'react-spring';
import { Trail } from 'react-spring/renderprops';
import { Layout, Hero, Text, WorkItem } from 'components';
import { media } from 'styles';
import { getItemFromImage } from 'utils';
import { SEO } from '../components';

const Section = styled.section`
  padding: 0 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;

  &:first-child {
    z-index: 0;
    height: ${({ isFaded }) => (isFaded ? '100%' : '100vh')};
  }

  &:last-child {
    position: absolute;
    bottom: 0px;
    width: 100%;
    align-self: center;
  }
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

const FlexContainer = styled.div`
  display: none;

  ${media.md(`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 900px;
    position: absolute;
    bottom: 200px;
  `)}
`;

const MobileItemsContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  ${media.md(`
    display: none;
  `)}
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

  const items = images.map((image: IImage) => {
    const { href, workInformation } = getItemFromImage(
      image.childImageSharp.fluid.src
    );

    return (
      <WorkItem
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
      delay: !isFaded ? 0 : 900,
    },
    transform: isFaded ? 'translate3d(0,-500px,0)' : 'translate3d(0,0px, 0)',
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
      <Section isFaded={isFaded}>
        <animated.div
          style={{
            ...animationHero,
            width: '100%',
            marginTop: '50px',
          }}
        >
          <Greeting>
            Hi friend <span role="img" aria-label="hand"></span>👋,
          </Greeting>
          <Hero />
        </animated.div>
      </Section>
      <MobileItemsContainer>{items}</MobileItemsContainer>
      <Section id="projects">
        <FlexContainer>
          <Trail
            config={{
              ...config.stiff,
              mass: 1,
              friction: 30,
              tension: 400,
              delay: !isFaded ? 0 : 900,
            }}
            items={items}
            keys={item => item.key}
            from={{
              opacity: 0,
              transform: isFaded
                ? 'translate3d(0, 100px, 0)'
                : 'translate3d(0,0px, 0)',
            }}
            to={{
              opacity: isFaded ? 1 : 0,
              transform: isFaded
                ? 'translate3d(0, 100px, 0)'
                : 'translate3d(0, 0px, 0)',
            }}
          >
            {item => props => (
              <animated.div style={{ ...props, margin: '10px' }}>
                {item}
              </animated.div>
            )}
          </Trail>
        </FlexContainer>
      </Section>
    </Layout>
  );
};

export default IndexPage;
