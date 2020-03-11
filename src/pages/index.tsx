import React, { useRef, useState, useEffect } from 'react';
import * as easings from 'd3-ease';
import { Layout, Hero, Text, WorkItem } from 'components';
import styled from 'styled-components';
import { media } from 'styles';
import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { getItemFromImage } from 'utils';
import { SEO } from '../components';
import { useSpring, animated, config } from 'react-spring';
import { Trail } from 'react-spring/renderprops';

const Section = styled.section`
  padding: 25px 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;

  &:[href*='home'] {
    z-index: 1;
  }
`;

const Greeting = styled(Text)`
  font-size: 22px;
  align-self: flex-start;
  margin-bottom: 45px;

  ${media.md(`
      font-size: 30px;
      padding-left: 20px;
  `)}
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 900px;
  position: absolute;
  z-index: 0;
  top: 250px;
`;

// const SubHeading = styled(Text)`
//   display: none;

//   ${media.md(`
//     display: inline;
//     color: #f47176;
//     align-self: flex-start;
//     margin-left: 25px;
//     opacity: 0.8;
//   `)}
// `;

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
      delay: isFaded ? 1000 : 0,
      duration: 500,
      mass: 500,
      friction: 100,
      tension: 300,
      easing: easings.easeCubicInOut,
    },
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
      <animated.div style={animationHero}>
        <Section>
          <Greeting>
            Hi friend <span role="img" aria-label="hand"></span>👋,
          </Greeting>
          <Hero />
        </Section>
      </animated.div>
      <Section id="projects">
        <FlexContainer>
          <Trail
            config={{ ...config.default, easing: easings.easeCubicOut }}
            items={items}
            keys={item => item.key}
            from={{
              opacity: 0,
              transform: isFaded ? 'translateY(-50%)' : 'translateY(0px)',
            }}
            to={{
              opacity: isFaded ? 1 : 0,
              transform: isFaded ? 'translateY(-50%)' : 'translateY(0px)',
            }}
          >
            {item => props => {
              return (
                <animated.div style={{ ...props, margin: '15px' }}>
                  {item}
                </animated.div>
              );
            }}
          </Trail>
        </FlexContainer>
      </Section>
    </Layout>
  );
};

export default IndexPage;
