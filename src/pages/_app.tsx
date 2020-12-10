import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../app/lib/apolloClient'
import Layout from '../app/common/layout/Layout'
import { AppContextProvider } from '../context'

import '../styles/styles.scss'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps)
  return (
    <>
      <Head>
        <meta name="description" content="Test" />
        <title>Cegoltar</title>
      </Head>
      <AppContextProvider>
        <ApolloProvider client={apolloClient}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
      </AppContextProvider>
    </>
  )
}
