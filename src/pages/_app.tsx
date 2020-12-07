import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { useApollo } from '../app/lib/apolloClient'
import { ApolloProvider } from '@apollo/client'
import Layout from '../app/common/layout/Layout'
import '../styles/styles.scss'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps)
  return (
    <>
      <Head>
        <meta name="description" content="Test" />
        <title>Cegoltar</title>
      </Head>

      <ApolloProvider client={apolloClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ApolloProvider>
    </>
  )
}
