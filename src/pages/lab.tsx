import React, { useState, FC, useEffect } from 'react';
import styled from 'styled-components';
import { Heading as HeadingComponent, WorkCase, SEO, Text } from 'components';
import { media } from 'styles';
import { Trail } from 'react-spring/renderprops';
import { animated } from 'react-spring';
import { FluidObject } from 'gatsby-image';
import { getItemFromImage } from 'utils';
import { graphql } from 'gatsby';

interface IImage {
  childImageSharp: {
    fluid: FluidObject;
  };
}

interface IGraphQlImage {
  [name: string]: IImage;
}

interface ProjectsProps {
  data: IGraphQlImage;
}

const Lab: FC<ProjectsProps> = ({ data }) => {
  const [isFaded, setFaded] = useState<boolean>(false);

  const queryObjectWithoutKeys = Object.values(data).map(
    (value: IImage) => value
  );

  const workCases: React.ReactElement[] = queryObjectWithoutKeys.map(
    (image: IImage, index: number) => {
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

  useEffect(() => {
    setFaded(!isFaded);
  }, []);

  return (
    <>
      <SEO
        title="Projects"
        description="Check here all my open source projects and some experiences about coding."
      />
      <Section>
        <Heading>Projects</Heading>
        <SubHeading>
          hover or click on the cards for more information about one of my projects
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
              transform: isFaded ? 'translateY(0%)' : 'translateY(100%)',
            }}
          >
            {item => props => (
              <StyledAnimatedContainer style={{ ...props }}>
                {item}
              </StyledAnimatedContainer>
            )}
          </Trail>
        </WorkCasesContainer>
      </Section>
    </>
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

const Heading = styled(HeadingComponent)`
  && {
    margin-bottom: 20px;

    &:nth-child(1) {
      display: block;

      ${media.md(`
        display: none;
      `)}
    }

    &:nth-child(2) {
      display: none;

      ${media.md(`
        display: inline;
        padding-left: 50px;
      `)}
    }
  }
`;

export const SubHeading = styled(Text)`
  display: none;
  color: ${({ theme }) => theme.color.opaque};

  ${media.md(`
    display: inline;
    font-size: 20px;
    margin: 0 0 20px 20px;
    align-self: flex-start;
  `)}
`;

const StyledAnimatedContainer = styled(animated.span)`
  margin: 0 0 15px 0;

  width: 100%;

  ${media.md(`
        width: unset;
        margin: 15px;
    `)}
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 865px;
  padding: 25px 15px;
  
  ${media.md(`
    padding: 50px 0px;
  `)}
`;

const WorkCasesContainer = styled.span`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default Lab;
