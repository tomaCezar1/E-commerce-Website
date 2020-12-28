import Categories from '../../../app/app-features/categories/Categories';
import { initializeApollo } from '../../../app/lib/apolloClient';
import {
  ProductCategoriesQuery,
  SubcategoriesQuery,
} from '../../../app/app-features/categories/ProductCategoriesQueries';

function ProductCategoryPage({ subcategories, categoryDetails }) {
  return (
    <Categories
      subcategories={subcategories}
      categoryDetails={categoryDetails}
    />
  );
}

export async function getServerSideProps(context) {
  const slug = context.query.categorySlug;

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
  const subcategoriesData = await apolloClient.query({
    query: SubcategoriesQuery,
    variables: {
      id: categoryId,
    },
  });

  return {
    props: {
      categoryDetails: productCategoriesData.data.productCategories[0],
      subcategories: subcategoriesData.data.productCategories,
    },
  };
}

export default ProductCategoryPage;
