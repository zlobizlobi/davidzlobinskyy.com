import React from 'react';
import { Link } from 'gatsby';
import { Layout } from 'components';

const IndexPage: React.FC = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <h1 style={{ fontFamily: 'Jost', fontWeight: 100 }}>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
