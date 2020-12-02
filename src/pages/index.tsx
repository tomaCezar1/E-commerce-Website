import HomePage from '../app/app-features/home-page/HomePage';
import DefaultLayout from '../app/common/DefaultLayout'

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


IndexPage.Layout = DefaultLayout;

export default IndexPage
