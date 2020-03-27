import React from 'react';
import styled from 'styled-components';
import { SEO, Form, Layout } from '../components';
import autoPhoto from '../images/autoPhoto.jpeg';
import {
  FormContainer,
  FormHeading,
  Image,
  HeadingContainer,
} from 'pageStyles';
import { FluidObject } from 'gatsby-image';
import { graphql } from 'gatsby';
import { FaEnvelopeOpen } from 'react-icons/fa';

const Container = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const SEO_DESCRIPTION =
  'Contact or hire David Zlobinskyy. Submit a question, testimony or evaluation. ';

interface IProps {
  data: {
    file: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
}

const Contact: React.FC<IProps> = ({ data }) => {
  return (
    <Layout>
      <SEO description={SEO_DESCRIPTION} title="Contact" image={autoPhoto} />
      <Container>
        <FormContainer>
          <Image fluid={data.file.childImageSharp.fluid} />
          <HeadingContainer>
            <FormHeading>Write me a</FormHeading>
            <FaEnvelopeOpen />
          </HeadingContainer>
          <Form />
        </FormContainer>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query Image {
    file(relativePath: { eq: "autoPhotoBg.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default Contact;
