import React from 'react';
import { SEO, Form, Layout } from 'components';
import autoPhoto from 'images/autoPhotoBg.png';

import {
  FormContainer,
  FormHeading,
  Image,
  HeadingContainer,
  Container,
} from 'pageStyles';
import { FluidObject } from 'gatsby-image';
import { graphql } from 'gatsby';
import { FaEnvelopeOpen } from 'react-icons/fa';

interface IProps {
  data: {
    file: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
}

const Contact: React.FC<IProps> = ({ data }) => (
  <Layout>
    <SEO
      description="Contact or hire David Zlobinskyy. Submit a question, testimony or evaluation."
      title="Contact"
      image={autoPhoto}
    />
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

export const query = graphql`
  query Image {
    file(relativePath: { eq: "autoMe.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default Contact;
