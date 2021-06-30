import React from 'react';
import Flex from '../components/Flex';
import Heading from '../components/Heading';
import styled from 'styled-components';
import { media } from '../styles/media';
import { Link } from 'gatsby';

export default function ContactError() {
  return (
    <Container flexDir="column">
      <StyledHeading>
        Oops, something went wrong! Please try submitting the form again.
      </StyledHeading>
      <Paragraph>
        If submitting the form does not work out - then please contact me
        through{' '}
        <Anchor href="mailto:bureauzlobi@gmail.com">
          bureauzlobi@gmail.com
        </Anchor>
        .
      </Paragraph>
      <Button to="/contact">Try again</Button>
    </Container>
  );
}

const Container = styled(Flex)`
  max-width: 1000px;
  padding: 0 15px;
  width: 100%;
  margin: 0 auto;
  justify-content: flex-start;
  margin-top: 40px;

  ${media.sm(`
    margin-top: 100px;
  `)}
`;

const StyledHeading = styled(Heading)`
  color: #243141;
  font-weight: 300;
  margin-bottom: 40px;
  max-width: 700px;
`;

const Paragraph = styled.p`
  font-weight: 300;
  max-width: 500px;
  margin-bottom: 60px;
`;

const Anchor = styled.a`
  font-weight: 900;
  color: currentColor;
`;

export const Button = styled(Link)`
  padding: 10px 20px;
  background-color: transparent;
  color: #243141;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 2px solid #243141;
  border-radius: 5px;
  display: flex;
  align-self: flex-start;
  align-items: center;
  text-decoration: none;

  > span {
    line-height: 0;
    margin-right: 10px;
  }

  :hover {
    background-color: #243141;
    color: white;

    * > svg {
      transition: all 0.2s ease;
      stroke: white;
    }
  }
`;
