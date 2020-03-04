import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Header } from 'components';
import { GlobalStyle, theme } from 'styles';
import { ThemeProvider } from 'styled-components';

export const Layout = ({ children }: any) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      {/* <main>{children}</main> */}
    </ThemeProvider>
  );
};
