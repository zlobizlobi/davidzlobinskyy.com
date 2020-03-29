import React, { useState, useLayoutEffect } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { GlobalStyle, darkTheme, lightTheme } from 'styles';
import { ThemeProvider } from 'styled-components';
import { ThemeSwitch } from './themeSwitch';
import { LocationProvider, createHistory } from '@reach/router';

export const Layout: React.FC<{}> = ({ children }) => {
  const [appTheme, setAppTheme] = useState('light');

  let history = createHistory(window);

  // for some types of tests you want a memory source

  useLayoutEffect(() => {
    const localTheme = localStorage.getItem('theme');

    if (localTheme && localTheme !== appTheme) {
      setAppTheme(localTheme);
    }
  }, []);

  return (
    <LocationProvider history={history}>
      <ThemeProvider theme={appTheme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Header />
        <main style={{ padding: '50px 0 100px 0' }}>{children}</main>
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
    </LocationProvider>
  );
};
