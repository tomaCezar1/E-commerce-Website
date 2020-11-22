import { Flex } from '@chakra-ui/react';
import DefaultLayout from '../components/DefaultLayout'
export const Home = (): JSX.Element => (
  <Flex maxW="1133px" w="100%">
    <Flex>

    </Flex>
  </Flex>
)

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


Home.Layout = DefaultLayout;

export default Home
