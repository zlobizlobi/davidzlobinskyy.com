import React, { useState, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { animated } from 'react-spring';
import { Trail } from 'react-spring/renderprops';
import { Layout, Hero, WorkCase, SEO } from 'components';
import { getItemFromImage } from 'utils';
import { Waypoint } from 'react-waypoint';
import {
  Section,
  Button,
  Greeting,
  WorkCasesContainer,
  Heading,
  SubHeading,
} from 'pageStyles';
import autoPhoto from '../assets/autoPhoto.jpeg';

interface IImage {
  id: string;
  childImageSharp: {
    id: string;
    fluid: FluidObject;
  };
}

const SEO_DESCRIPTION =
  'My name is David Zlobinskyy. I do Frontend Webdevelopment. Having 2 years of experience, I like designing web-applications & building them using React and Gatsby.';

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

  const projectSectionRef = useRef<HTMLElement>(null!);

  const [isFaded, setFaded] = useState<boolean>(false);

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

  const handleWaypointScroll = () => {
    setFaded(!isFaded);
  };

  return (
    <Layout>
      <SEO title="Hello" description={SEO_DESCRIPTION} image={autoPhoto} />
      <Section id="home">
        <Greeting>
          Hi friend{' '}
          <span role="img" aria-label="hand">
            👋
          </span>
          ,
        </Greeting>
        <Hero />
        <Button
          onClick={() => {
            window.scrollTo({
              behavior: 'smooth',
              top: projectSectionRef.current.offsetTop,
            });
          }}
        >
          see my work
        </Button>
      </Section>
      <Waypoint onEnter={handleWaypointScroll} onLeave={handleWaypointScroll}>
        <Section id="projects" ref={projectSectionRef}>
          <Heading>Work</Heading>
          <Heading>See my work</Heading>
          <SubHeading>
            hover or click on the cards for more information about a project
          </SubHeading>
          <WorkCasesContainer>
            <Trail
              config={{
                mass: 1,
                friction: 30,
                tension: 400,
                delay: isFaded ? 500 : 0,
              }}
              items={workCases}
              keys={item => item.key}
              from={{
                opacity: 0,
                transform: isFaded ? 'translateY(0%)' : 'translateY(50%)',
              }}
              to={{
                opacity: isFaded ? 1 : 0,
                transform: isFaded ? 'translateY(0%)' : 'translateY(50%)',
              }}
            >
              {item => props => (
                <animated.span style={{ ...props, margin: '10px' }}>
                  {item}
                </animated.span>
              )}
            </Trail>
          </WorkCasesContainer>
        </Section>
      </Waypoint>
    </Layout>
  );
};

export default IndexPage;
