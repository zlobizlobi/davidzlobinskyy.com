import React from 'react';
import styled from 'styled-components';
import { SEO, Form, Layout } from '../components';
import autoPhoto from '../images/autoPhoto.jpeg';
import { FormContainer, FormHeading } from 'pageStyles';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const Container = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const SEO_DESCRIPTION =
  'Contact or hire David Zlobinskyy. Submit a question, testimony or evaluation. ';

const Contact = ({ data }: any) => {
  console.log(data);

  return (
    <Layout>
      <SEO description={SEO_DESCRIPTION} title="Contact" image={autoPhoto} />
      <Container>
        <FormContainer>
          {/* <Img /> */}
          <FormHeading>Write me a </FormHeading>
          <Form></Form>
        </FormContainer>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query Image {
    file(relativePath: { eq: "autoPhoto.jpeg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Contact;
