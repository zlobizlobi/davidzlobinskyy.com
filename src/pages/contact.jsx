import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { media } from '../styles/media';
import Img from 'gatsby-image';
import Form from '../components/Form';
import Seo from '../components/Seo';
import Heading from '../components/Heading';

const Contact = ({ data }) => (
  <>
    <Seo
      description="Contact or hire David Zlobinskyy. Submit a question, testimony or evaluation."
      title="Contact"
    />
    <Container>
      <FormContainer>
        <Image fluid={data.file.childImageSharp.fluid} />
        <CTAContainer>
          <StyledHeading>Contact</StyledHeading>
          <Subtitle>
            Want to hire me or ask a question? Write me! I'll try to get back to
            you within 1 day!{' '}
            <span style={{ fontSize: '24px', marginLeft: '5px' }}>🚀</span>
          </Subtitle>
        </CTAContainer>
        <Form />
      </FormContainer>
    </Container>
  </>
);

export const query = graphql`
  query Image {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default Contact;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 865px;
  padding: 50px 15px;
  width: 100%;
  ${media.md(`
    padding: 50px 0;
  `)};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
`;

export const CTAContainer = styled.span`
  margin: 20px 0 50px 0;
  align-self: flex-start;
`;

export const Subtitle = styled(Heading)`
  && {
    color: #243141;
    font-size: 18px;
    font-weight: 300;
    max-width: 400px;
    align-self: flex-start;
  }
`;

export const StyledHeading = styled(Heading)`
  font-weight: 900;
  font-size: 32px;
  margin-bottom: 10px;
  color: #243141;
`;

export const Image = styled(Img)`
  width: 150px;
  height: 150px;
  align-self: flex-end;
  border-radius: 50%;
  border: 3px solid #243141;

  ${media.md(`
     width: 170px;
     height: 170px;
  `)}
`;
