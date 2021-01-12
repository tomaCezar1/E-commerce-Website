import HomePage from '../app/app-features/home-page/HomePage';
import { initializeApollo } from '../app/lib/apolloClient';
import { ProductListQuery } from '../app/app-features/home-page/ProductList/ProductListQuery';

function IndexPage({ homePageInfo }): JSX.Element {
  return <HomePage homePageInfo={homePageInfo} />;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();
  const homePageData = await apolloClient.query({
    query: ProductListQuery,
    variables: {
      filter: {
        isHomePage: { is: true },
        isActive: { is: true },
      },
      sorting: [{ field: 'sortOrder', direction: 'ASC' }],
    },
  });

  return {
    props: {
      homePageInfo: homePageData.data,
    },
  };
}

export default IndexPage;
