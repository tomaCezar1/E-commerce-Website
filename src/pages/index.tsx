import HomePage from '../app/app-features/home-page/HomePage';

function IndexPage(): JSX.Element {
  return <HomePage/>
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
