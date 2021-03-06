import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { GlobalStyle } from '../styles/globalStyle';
import useDetectKey from '../hooks/useDetectKey';

export default function Layout({ children }) {
  useDetectKey();

  return (
    <>
      <Header />
      <GlobalStyle />
      <main
        style={{
          padding: '50px 0 65px 0',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
