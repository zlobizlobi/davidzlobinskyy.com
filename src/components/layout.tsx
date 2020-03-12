import React, { useState, useLayoutEffect } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { GlobalStyle, darkTheme, lightTheme } from 'styles';
import { ThemeProvider } from 'styled-components';
import { ThemeSwitch } from './themeSwitch';

export const Layout: React.FC<{}> = ({ children }) => {
  const [appTheme, setAppTheme] = useState('light');

  useLayoutEffect(() => {
    const localTheme = localStorage.getItem('theme');

    console.log(localTheme);
    if (localTheme && localTheme !== appTheme) {
      setAppTheme(localTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={appTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header />
      <main
        style={{
          marginTop: '50px',
          paddingBottom: '50px',
          flex: '1 0 auto',
          position: 'relative',
        }}
      >
        {children}
      </main>
      <ThemeSwitch
        theme={appTheme}
        onClick={() => {
          const theme = appTheme === 'light' ? 'dark' : 'light';
          setAppTheme(theme);
          localStorage.setItem('theme', theme);
        }}
      />
      <Footer appTheme={appTheme} />
    </ThemeProvider>
  );
};
