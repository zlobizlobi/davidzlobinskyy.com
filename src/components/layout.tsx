import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Header } from 'components';
import { GlobalStyle, darkTheme, lightTheme } from 'styles';
import { ThemeProvider } from 'styled-components';
import { ThemeSwitch } from './themeSwitch';

export const Layout: React.FC<{}> = ({ children }) => {
  const [appTheme, setAppTheme] = useState<boolean>(true);

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
    <ThemeProvider theme={appTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main style={{ marginTop: '50px' }}>{children}</main>
      <ThemeSwitch theme={appTheme} onClick={() => setAppTheme(!appTheme)} />
    </ThemeProvider>
  );
};
