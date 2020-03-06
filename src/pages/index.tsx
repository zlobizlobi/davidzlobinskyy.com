import React from 'react';
import { Layout, Hero, Heading, Text, WorkItem } from 'components';
import styled from 'styled-components';
import { media } from 'styles';
import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';

const Section = styled.section`
  padding: 25px 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;

  ${media.md(`
      padding: 40px 0 0 0;
  `)}
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
  flex-direction: column;

  ${media.md(`
    flex-direction: row;
  `)}
`;

const Anchor = styled.a`
  margin-bottom: 20px;

  ${media.md(`
    margin-right: 20px;
  `)}

  &:last-child {
    margin: 0;
  }
`;

// const SubHeading = styled(Text)``;

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
    allFile: { nodes },
  } = data;

  const images = nodes.slice(1, nodes.length);

  const getHref = (src: string) => {
    const splittedArray = src.split('/');

    const imageReference = splittedArray[splittedArray.length - 1];

    switch (imageReference) {
      case 'iculture.png':
        return 'https://iculture.nl';
      case 'foleon.png':
        return 'https://app.foleon.com';
      case 'lenny.png':
        return 'https://lenny.tattoo';
      case 'tatjana.png':
        return 'https://tatjananeufeld.com';
      case 'young-socials.png':
        return 'https://young-socials.nl';
      default:
        return 'https://bestel.simpel.nl/sim-only';
    }
  };

  return (
    <Layout>
      <Section>
        <Greeting>Hi friend 👋,</Greeting>
        <Hero />
      </Section>
      <Section id="projects">
        <Heading>See my work</Heading>
        <FlexContainer>
          {images.map((image: IImage) => {
            const href = getHref(image.childImageSharp.fluid.src);
            return (
              <Anchor href={href} key={image.id} target="_blank">
                <WorkItem imgSrc={image.childImageSharp.fluid} />
              </Anchor>
            );
          })}
        </FlexContainer>
      </Section>
    </Layout>
  );
};

export default IndexPage;
