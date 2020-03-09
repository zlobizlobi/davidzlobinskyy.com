import React, { useState } from 'react';
import { Header } from 'components';
import { GlobalStyle, darkTheme, lightTheme } from 'styles';
import { ThemeProvider } from 'styled-components';
import { ThemeSwitch } from './themeSwitch';

export const Layout: React.FC<{}> = ({ children }) => {
  const [appTheme, setAppTheme] = useState<boolean>(false);

  return (
    <ThemeProvider theme={appTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <main style={{ marginTop: '50px' }}>{children}</main>
      <ThemeSwitch theme={appTheme} onClick={() => setAppTheme(!appTheme)} />
    </ThemeProvider>
  );
};
