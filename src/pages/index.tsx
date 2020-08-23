import React, { FC } from 'react';
import { Hero, SEO } from 'components';
import styled from 'styled-components';
import { media } from 'styles';
import { Heading as HeadingComponent } from 'components';

const IndexPage: FC = () => {
  return (
    <>
      <SEO title="Home" />
      <Section id="home">
        <Hero />
      </Section>
    </>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 865px;
  padding: 25px 15px;

  ${media.md(`
    padding: 0px;
  `)};
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
