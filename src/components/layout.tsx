import React, { useState, useLayoutEffect, FC } from 'react';
import { Header } from './header';
import { Footer } from './footer/footer';
import { GlobalStyle, darkTheme, lightTheme } from 'styles';
import { ThemeProvider } from 'styled-components';
import { ThemeSwitch } from './themeSwitch';

export const Layout: FC<{}> = ({ children }) => {
  const [appTheme, setAppTheme] = useState('dark');

  useLayoutEffect(() => {
    const localTheme = localStorage.getItem('theme');

    if (localTheme) {
      setAppTheme(localTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={appTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header />
      <main style={{ padding: '50px 0 65px 0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>{children}</main>
      <ThemeSwitch
        theme={appTheme}
        onClick={() => {
          const theme = appTheme === 'light' ? 'dark' : 'light';
          setAppTheme(theme);
          localStorage.setItem('theme', theme);
        }}
      />
      <Footer appTheme={appTheme} />
    </ThemeProvider >
  );
};
