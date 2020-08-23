import React from 'react';
import { SEO, Form } from 'components';
import { FluidObject } from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { media } from 'styles';
import { Heading as HeadingComponent } from 'components';
import Img from 'gatsby-image';
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
  <>
    <SEO
      description="Contact or hire David Zlobinskyy. Submit a question, testimony or evaluation."
      title="Contact"
    />
    <Container>
      <FormContainer>
        <Image fluid={data.file.childImageSharp.fluid} />
        <CTAContainer>
          <FormHeading>
            Like my work? Or just want to strike up a conversation? Write me!
          </FormHeading>
        </CTAContainer>
        <Form />
      </FormContainer>
    </Container>
  </>
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

export const FormHeading = styled(HeadingComponent)`
  && {
    color: ${({ theme }) => theme.color.secondary};
    font-size: 25px;
    font-weight: 300;
    max-width: 400px;
    align-self: flex-start;
  }
`;

export const Image = styled(Img)`
  width: 150px;
  height: 150px;
  align-self: flex-end;
  border-radius: 50%;
  ${media.md(`
     width: 170px;
     height: 170px;
  `)}
`;
