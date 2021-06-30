import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import Seo from '../components/Seo';
import Text from '../components/Text';
import WorkCard from '../components/WorkCard';
import Flex from '../components/Flex';
import { media } from '../styles/media';
import { animated, useTrail } from 'react-spring';
import { getItemFromImage } from '../utils/getItemFromImage';
import { graphql } from 'gatsby';

const Work = ({ data }) => {
  const queryObjectWithoutKeys = Object.values(data).map(value => value);

  const trail = useTrail(queryObjectWithoutKeys.length, {
    config: {
      mass: 0.1,
      friction: 40,
      tension: 700,
      delay: 400,
    },
    opacity: 1,
    transform: 'translateY(0%)',
    from: { opacity: 0, transform: 'translateY(100%)' },
  });

  return (
    <>
      <Seo
        title="Work"
        description="Take a look at all the development work I did for my clients"
      />
      <Section>
        <StyledHeading>Projects</StyledHeading>
        <SubHeading>Some of the work I did for people.</SubHeading>
        <WorkCardsContainer>
          {trail.map((style, index) => {
            const {
              childImageSharp: { fluid },
            } = queryObjectWithoutKeys[index];

            const { href, workInformation } = getItemFromImage(fluid.src);

            return (
              <StyledAnimatedContainer style={style} key={index}>
                <WorkCard
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  alt={workInformation}
                  workInformation={workInformation}
                  imgSrc={fluid}
                />
              </StyledAnimatedContainer>
            );
          })}
        </WorkCardsContainer>
      </Section>
    </>
  );
};

export const image = graphql`
  fragment image on File {
    childImageSharp {
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`;

const WorkCardsContainer = styled(Flex)`
  width: 100%;
  overflow-x: visible;
  flex-wrap: wrap;
  justify-content: center;

  ${media.xl(`
    overflow-x: auto;
    flex-wrap: nowrap;
    justify-content: unset;
  `)}
`;

export const query = graphql`
  query Images {
    image1: file(relativePath: { eq: "foleon.png" }) {
      ...image
    }
    image2: file(relativePath: { eq: "iculture.png" }) {
      ...image
    }
    image3: file(relativePath: { eq: "lenny.png" }) {
      ...image
    }
    image4: file(relativePath: { eq: "simpel.png" }) {
      ...image
    }
    image5: file(relativePath: { eq: "tatjana.png" }) {
      ...image
    }
    image6: file(relativePath: { eq: "young-socials.png" }) {
      ...image
    }
    image7: file(relativePath: { eq: "cvmaker.png" }) {
      ...image
    }
    image8: file(relativePath: { eq: "ltl.jpg" }) {
      ...image
    }
  }
`;

const StyledHeading = styled(Heading)`
  font-size: 32px;
  font-weight: 900;
  color: #243141;
  margin-bottom: 10px;
`;

export const SubHeading = styled(Text)`
  color: #243141;
  margin-bottom: 60px;

  ${media.md(`
    display: inline;
    font-size: 20px;
  `)}
`;

const StyledAnimatedContainer = styled(animated.span)`
  margin: 0 0 15px 0;
  width: 100%;
  transition: transform 0.25ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  ${media.md(`
    width: unset;
    margin: 15px;
    transition: transform 0.250ms ease-in-out;
  `)}
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  padding: 25px 15px;

  ${media.md(`
    padding: 0 0 50px 0;
  `)}
`;

export default Work;
