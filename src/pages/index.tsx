import React from 'react';
import { Layout, Hero } from 'components';
import styled from 'styled-components';
import { media } from 'styles';
import { Greeting } from '../components/hero/styles';

const Section = styled.section`
  padding: 25px 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;

  ${media.md(`
      padding: 40px 0 0 0;
  `)}
`;

const IndexPage: React.FC = () => (
  <Layout>
    <Section>
      <Greeting>Hi friend 👋,</Greeting>
      <Hero />
    </Section>
  </Layout>
);

export default IndexPage;
