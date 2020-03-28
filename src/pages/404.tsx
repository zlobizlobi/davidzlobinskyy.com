import React from 'react';
import { Heading } from 'components';
import styled from 'styled-components';

const PageContainer = styled.section`
  width: 100%;
  height: 100vh;
`;

const NotFoundPage: React.FC = () => (
  <PageContainer>
    <Heading>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Heading>
  </PageContainer>
);

export default NotFoundPage;
