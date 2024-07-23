import React from 'react';

import '@/styles/globals.css';
import '@fontsource/poppins';
import Head from 'next/head';

import { CssBaseline, CssVarsProvider } from '@mui/joy';
import { extendTheme } from '@mui/joy/styles';

import type { AppProps } from 'next/app';

const theme = extendTheme({
  fontFamily: {
    body: 'Poppins, sans-serif',
    display: 'Poppins, sans-serif',
    code: 'Poppins, sans-serif',
    fallback: 'Poppins, sans-serif',
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline>
        <Head>
          <title>Solving.AI</title>
          <meta name="description" content="What can AI do for you?" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </CssBaseline>
    </CssVarsProvider>
  );
}
