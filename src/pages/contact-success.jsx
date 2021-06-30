import React from 'react';
import Flex from '../components/Flex';
import Heading from '../components/Heading';
import styled from 'styled-components';
import ArrowLeftIcon from '../components/ArrowLeft';
import { media } from '../styles/media';
import { Link } from 'gatsby';

export default function ContactSuccess() {
  return (
    <Container flexDir="column">
      <StyledHeading>
        Thanks for reaching out! I have <Bold>received</Bold> your message.
      </StyledHeading>
      <Paragraph>
        I always try to come back to you within one day! Please feel free to
        contact me through{' '}
        <Anchor href="mailto:bureauzlobi@gmail.com">
          bureauzlobi@gmail.com
        </Anchor>{' '}
        if that's not the case.
      </Paragraph>
      <Button to="/">
        <span>
          <ArrowLeftIcon color="#243141" />
        </span>
        Back to home
      </Button>
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
`;

const Paragraph = styled.p`
  font-weight: 300;
  max-width: 500px;
  margin-bottom: 60px;
`;

const Bold = styled.span`
  font-weight: 900;
`;

const Anchor = styled.a`
  font-weight: 900;
  color: currentColor;
`;

const Button = styled(Link)`
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
