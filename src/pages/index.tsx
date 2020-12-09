import React, {useContext, useEffect} from 'react'
import HomePage from '../app/app-features/home-page/HomePage';
import {ProductCategoriesQuery} from '../app/app-features/categories/ProductCategoriesQueries'
import { initializeApollo } from '../app/lib/apolloClient';
// import { sortCategories } from '../utils/categories'
import {AppContext, AppContextProvider} from "../context";

function IndexPage({categories}): JSX.Element {
  const { setAppContext } = useContext(AppContext)

  useEffect(() => {
    // console.log(context);
    setAppContext({ categories })
  }, [])

  return (
    // <AppContextProvider>
       <HomePage />
    // </AppContextProvider>
   
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

// TODO: Need to Fix
// export async function getStaticProps() {
//   const apolloClient = initializeApollo()

//   await apolloClient.query({
//     query: ProductCategoriesQuery
//   })

//   return addApolloState(apolloClient, {
//     props: {},
//     revalidate: 1,
//   })
// }

export default IndexPage
