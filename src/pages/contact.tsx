import React from 'react';
import { Layout } from 'components';
import styled from 'styled-components';

const Container = styled.div`
  height: calc(100vh - 100px);
`;
const Contact = () => (
  <Layout>
    <Container>Hello</Container>
  </Layout>
);

export default Contact;
