import React from 'react';
import Head from 'next/head';
import App, { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { initializeApollo, useApollo } from '../app/lib/apolloClient';
import { ProductCategoriesQuery } from '../app/app-features/categories/ProductCategoriesQueries';
import Layout from '../app/common/layout/Layout';
import { AppContextProvider } from '../context';

import '../styles/styles.scss';

function MyApp({
  Component,
  pageProps,
  initialState,
  locale,
}: AppProps & any): JSX.Element {
  const apolloClient = useApollo(pageProps, locale);

  return (
    <>
      <Head>
        <meta name="description" content="Test" />
        <title>Cegoltar</title>
      </Head>
      <ChakraProvider>
        <AppContextProvider initialState={initialState}>
          <ApolloProvider client={apolloClient}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ApolloProvider>
        </AppContextProvider>
      </ChakraProvider>
    </>
  );
}

/**
 * This Is Bad !!! Because we are causing every page to be server side rendered
 * and next.js will can not perform static pages optimization
 *
 * We can compromise and load categories client side BUT we anyway have to
 * load translations this way, soo... we are in a shitty situation anyway
 * TODO: Run some tests and see what performance is
 * TODO: Probably we will load categories client side and compromise the SEO
 */
MyApp.getInitialProps = async (appContext) => {
  const apolloClient = initializeApollo(null, appContext.router.locale);
  const productCategoriesData = await apolloClient.query({
    query: ProductCategoriesQuery,
    variables: { filter: { isActive: { is: true } } },
  });
  const initialState = {
    categories: productCategoriesData.data.productCategories,
  };
  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
    initialState,
    locale: appContext.router.locale,
  };
};

export default MyApp;
