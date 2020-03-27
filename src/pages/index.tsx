import React, { useState, useRef } from 'react';
import { graphql } from 'gatsby';
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
import autoPhoto from '../images/autoPhoto.jpeg';

interface IImage {
  childImageSharp: {
    fluid: FluidObject;
  };
}

interface IGraphQlImage {
  [name: string]: IImage;
}

interface IProps {
  data: IGraphQlImage;
}

const SEO_DESCRIPTION =
  'My name is David Zlobinskyy. I do Frontend Webdevelopment. Having 2 years of experience, I like designing web-applications & building them using React and Gatsby.';

const IndexPage: React.FC<IProps> = ({ data }) => {
  const projectSectionRef = useRef<HTMLElement>(null!);

  const [isFaded, setFaded] = useState<boolean>(false);

  const queryObjectWithoutKeys = Object.values(data).map(
    (value: IImage) => value
  );

  const workCases = queryObjectWithoutKeys.map(
    (image: IImage, index: number) => {
      console.log(image);
      const { href, workInformation } = getItemFromImage(
        image.childImageSharp.fluid.src
      );

      return (
        <WorkCase
          href={href}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          alt={workInformation}
          imgSrc={image.childImageSharp.fluid}
          workInformation={workInformation}
        />
      );
    }
  );

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
          See my work
        </Button>
      </Section>
      <Waypoint onEnter={handleWaypointScroll} onLeave={handleWaypointScroll}>
        <Section id="projects" ref={projectSectionRef}>
          <Heading>Projects</Heading>
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
              keys={({ props: { href } }) => href}
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

export const image = graphql`
  fragment image on File {
    childImageSharp {
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const query = graphql`
  query Images {
    image1: file(relativePath: { eq: "enable.png" }) {
      ...image
    }
    image2: file(relativePath: { eq: "foleon.png" }) {
      ...image
    }
    image3: file(relativePath: { eq: "iculture.png" }) {
      ...image
    }
    image4: file(relativePath: { eq: "lenny.png" }) {
      ...image
    }
    image5: file(relativePath: { eq: "simpel.png" }) {
      ...image
    }
    image6: file(relativePath: { eq: "tatjana.png" }) {
      ...image
    }
    image7: file(relativePath: { eq: "young-socials.png" }) {
      ...image
    }
  }
`;

export default IndexPage;
