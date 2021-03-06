import React, { useEffect } from "react"
import Head from "next/head"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider } from "@emotion/react"

import AuthContext from "../src/authContext"
import theme from "../src/theme"
import createEmotionCache from "../src/createEmotionCache"
import Nav from "../src/Nav"
import "../styles/global.css"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>LS Swap</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <AuthContext>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Nav />
          <Component {...pageProps} />
        </AuthContext>
      </ThemeProvider>
    </CacheProvider>
  )
}
