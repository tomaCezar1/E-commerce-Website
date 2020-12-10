import React, {useContext, useEffect} from 'react'
import HomePage from '../app/app-features/home-page/HomePage';
import { ProductCategoriesQuery } from '../app/app-features/categories/ProductCategoriesQueries'
import { initializeApollo } from '../app/lib/apolloClient';
import { AppContext } from "../context";

function IndexPage({categories}): JSX.Element {
  const { setAppContext } = useContext(AppContext)

  useEffect(() => {
    setAppContext({ categories })
  }, [])

  return (
    <HomePage />
  )
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const data = await apolloClient.query({
    query: ProductCategoriesQuery
  })

  return {
    props: {
      categories: data.data.productCategories
    },
  }
}

export default IndexPage
