import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Seo from '../components/Seo';
import { media } from '../styles/media';

const IndexPage = () => {
  return (
    <>
      <Seo title="Home" />
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
  max-width: 1000px;
  padding: 25px 15px;
  align-items: center;

  ${media.xl(`
    padding: 0 15px;
  `)};
`;

export default IndexPage;
