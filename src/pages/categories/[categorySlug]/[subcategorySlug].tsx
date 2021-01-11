import Subcategories from '../../../app/app-features/categories/Subcategories';
import { initializeApollo } from '../../../app/lib/apolloClient';
import { ProductCategoriesQuery } from '../../../app/app-features/categories/ProductCategoriesQueries';
import {
  ProductListQuery,
  ProductsCountQuery,
} from '../../../app/app-features/home-page/ProductList/ProductListQuery';

export default function SubcategoryPage({
  products,
  subcategory,
  productsCount,
  currentPage,
  category,
}) {
  return (
    <Subcategories
      products={products}
      subcategory={subcategory}
      productsCount={productsCount}
      currentPage={currentPage}
      category={category}
    />
  );
}

export async function getServerSideProps(context) {
  const slug = context.query.subcategorySlug;

  const page = context.query.page || 1;

  let field = 'sortOrder';
  let direction = 'DESC';
  if (context.query.sort === 'cheap') {
    field = 'price';
    direction = 'ASC';
  } else if (context.query.sort === 'expensive') {
    field = 'price';
    direction = 'DESC';
  } else if (context.query.sort === 'new') {
    field = 'createdAt';
    direction = 'DESC';
  } else if (context.query.sort === 'old') {
    field = 'createdAt';
    direction = 'ASC';
  }

  const apolloClient = initializeApollo();

  const productCategoriesData = await apolloClient.query({
    query: ProductCategoriesQuery,
    variables: {
      filter: {
        slug: { eq: slug },
      },
    },
  });

  const parentId = productCategoriesData.data.productCategories[0].parent;

  const categoryData = await apolloClient.query({
    query: ProductCategoriesQuery,
    variables: {
      filter: {
        id: {
          eq: parentId,
        },
      },
    },
  });

  const limit = 20;

  const offset = limit * page - limit;

  const categoryId = productCategoriesData.data.productCategories[0].id;

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
          field: field,
          direction: direction,
        },
      ],
    },
  });

  let productsCount: number;
  let productsCountData: any;

  try {
    productsCountData = await apolloClient.query({
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

    productsCount = productsCountData?.data.productAggregate.count.id;
  } catch (e) {
    productsCount = 0;
  }

  return {
    props: {
      products: productsData.data.products,
      subcategory: productCategoriesData?.data?.productCategories[0],
      productsCount: productsCount,
      category: categoryData.data.productCategories[0],
      currentPage: page,
    },
  };
}
