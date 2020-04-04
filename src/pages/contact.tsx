import React from 'react';
import { SEO, Form, Layout } from 'components';
import autoPhoto from 'images/autoMe.png';
import {
  FormContainer,
  FormHeading,
  Image,
  CTAContainer,
  Container,
  Icon,
} from 'pageStyles';
import { FluidObject } from 'gatsby-image';
import { graphql } from 'gatsby';

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
        <CTAContainer>
          <FormHeading>Write me a</FormHeading>
          <Icon />
        </CTAContainer>
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
