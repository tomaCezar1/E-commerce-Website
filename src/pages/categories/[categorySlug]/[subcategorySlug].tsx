import Subcategories from '../../../app/app-features/categories/Subcategories';
import { initializeApollo } from '../../../app/lib/apolloClient';
import { ProductCategoriesQuery } from '../../../app/app-features/categories/ProductCategoriesQueries';
import {
  ProductListQuery,
  ProductsCountQuery,
} from '../../../app/app-features/home-page/product-list/ProductListQuery';

export default function SubcategoryPage({
  products,
  subcategory,
  productsCount,
  currentPage,
}) {
  return (
    <Subcategories
      products={products}
      subcategory={subcategory}
      productsCount={productsCount}
      currentPage={currentPage}
    />
  );
}

export async function getServerSideProps(context) {
  const slug = context.query.subcategorySlug;

  const page = context.query.page || 1;

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

  const limit = 20;

  const offset = limit * page - limit;

  const productsData = await apolloClient.query({
    query: ProductListQuery,
    variables: {
      filter: {
        categoryId: {
          eq: categoryId,
        },
      },
      paging: {
        limit: limit,
      },
      offset: offset,
      sorting: [
        {
          field: 'price',
          direction: 'ASC',
        },
      ],
    },
  });

  const productsCountData = await apolloClient.query({
    query: ProductsCountQuery,
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
      subcategory: productCategoriesData?.data?.productCategories[0],
      productsCount: productsCountData?.data.productAggregate.count.id,
      currentPage: page,
    },
  };
}
