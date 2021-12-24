import React, { useState } from 'react';
import Head from 'next/head';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import Nav from "../src/Nav"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(prefersDarkMode)

  const customTheme = React.useMemo(
    () =>
      createTheme(theme(darkMode ? 'dark' : 'light')),
    [darkMode],
  );

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>LS Swap</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={customTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

