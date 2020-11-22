import React from 'react';
import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles.scss'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { useApollo } from '../lib/apolloClient'
import { ApolloProvider } from '@apollo/client';
import { APP_THEME } from '../lib/theme';

const theme = extendTheme(APP_THEME)

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const Layout = (Component as any).Layout ? (Component as any).Layout : React.Fragment;
  const apolloClient = useApollo(pageProps)
  return (
    <>
      <Head>
        <meta name="description" content="Test" />
        <title>Cegoltar</title>
      </Head>

      <ApolloProvider client={apolloClient}>
        <ChakraProvider resetCSS theme={theme}>
          <Layout>
              <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </ApolloProvider>
    </>
  )
}
