import Subcategories from '../../../app/app-features/categories/Subcategories';
import { initializeApollo } from '../../../app/lib/apolloClient';
import { ProductCategoriesQuery } from '../../../app/app-features/categories/ProductCategoriesQueries';
import { ProductListQuery } from '../../../app/app-features/home-page/product-list/ProductListQuery';

export default function SubcategoryPage({ products }) {
  return <Subcategories products={products} />;
}

export async function getServerSideProps(context) {
  const slug = context.query.subcategorySlug;

  const apolloClient = initializeApollo();

  const productCategoriesData = await apolloClient.query({
    query: ProductCategoriesQuery,
    variables: {
      filter: {
        slug: { eq: slug },
      },
    },
  });

  const categoryId = productCategoriesData.data.productCategories[0].id;

  const productsData = await apolloClient.query({
    query: ProductListQuery,
    variables: {
      filter: {
        categoryId: {
          eq: categoryId,
        },
      },
      sorting: [
        {
          field: 'price',
          direction: 'ASC',
        },
      ],
    },
  });

  return {
    props: {
      products: productsData.data.products,
    },
  };
}
