import Script from "next/script";
import { CacheProvider, type EmotionCache } from "@emotion/react";

import "styles/globals.css";
import type { AppProps } from "next/app";
import { createEmotionCache } from "utils";
import Layout from "compositions/Layout/Layout";
import { ErrorBoundaryWrapper, Head, Progress } from "hocs";

import Snack from "contexts/Snack";
import { CartProvider } from "contexts/CartContext";
import { ThemeProvider, SWR, SettingsProvider, FavoriteProductProvider } from "contexts";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  pageProps: { initData: []; fallback: [] };
}

export default function App(props: MyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head />
      <Script src="https://sp.zalo.me/plugins/sdk.js"></Script>

      <ThemeProvider>
        <ErrorBoundaryWrapper>
          <Progress />
          <Snack>
            <CartProvider>
              <SWR fallback={pageProps.fallback}>
                <SettingsProvider>
                  <FavoriteProductProvider>
                    <Layout>
                      <Component {...pageProps} />
                    </Layout>
                  </FavoriteProductProvider>
                </SettingsProvider>
              </SWR>
            </CartProvider>
          </Snack>
        </ErrorBoundaryWrapper>
      </ThemeProvider>
    </CacheProvider>
  );
}
