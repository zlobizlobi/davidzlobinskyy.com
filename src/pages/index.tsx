import React from 'react';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { Hero, SEO } from 'components';
import styled from 'styled-components';
import { media } from 'styles';
import { Heading as HeadingComponent } from 'components';

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

const IndexPage: React.FC<IProps> = ({ data }) => {

  return (
    <>
      <SEO title="Home" />
      <Section id="home">
        <Hero />
        <Hero />
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

const Section = styled.section`
  padding: 0 15px 0 15px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 700px;
  padding: 50px 15px;

  ${media.md(`
    padding: 50px 0;
  `)};
`;

const WorkCasesContainer = styled.span`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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

export const SubHeading = styled(HeadingComponent)`
  display: none;
  color: ${({ theme }) => theme.color.opaque};

  ${media.md(`
    display: inline;
    padding-left: 75px; 
    font-size: 20px;
    margin-bottom: 25px
  `)}
`;

export default IndexPage;
