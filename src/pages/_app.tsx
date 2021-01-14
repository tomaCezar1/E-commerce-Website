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
import { DictionaryQuery } from '../app/app-features/home-page/DictionaryQuery';

function MyApp({
  Component,
  pageProps,
  initialState,
}: AppProps & any): JSX.Element {
  const apolloClient = useApollo(pageProps);

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
  const apolloClient = initializeApollo();

  const translationsData = await apolloClient.query({
    query: DictionaryQuery,
  });

  const productCategoriesData = await apolloClient.query({
    query: ProductCategoriesQuery,
    variables: { filter: { isActive: { is: true } } },
    context: {
      headers: {
        lang: appContext.router.locale,
      },
    },
  });

  const dictionary = {};

  await translationsData.data.dictionaryItems.map(
    ({ id, key, value, ruValue }) => {
      if (appContext.router.locale === 'ru') {
        let nonEmptyValue: string;
        if (!ruValue.trim()) {
          nonEmptyValue = 'Missing translation';
        } else {
          nonEmptyValue = ruValue;
        }
        dictionary[key] = {
          id,
          key,
          value: nonEmptyValue,
        };
      } else {
        dictionary[key] = {
          id,
          key,
          value,
        };
      }
    }
  );

  const initialState = {
    categories: productCategoriesData.data.productCategories,
    dictionary: dictionary,
  };

  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
    initialState,
    locale: appContext.router.locale,
  };
};

export default MyApp;
