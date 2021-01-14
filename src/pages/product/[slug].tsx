import ProductDetails from '../../app/app-features/product-details/ProductDetails';
import { ProductDetailsQuery } from '../../app/app-features/product-details/ProductDetailsQuery';
import Breadcrumbs from '../../app/common/breadcrumbs/Breadcrumbs';
import { initializeApollo } from '../../app/lib/apolloClient';
import { ProductCategoriesQuery } from '../../app/app-features/categories/ProductCategoriesQueries';

function ProductDetailsComponent({
  productDetails,
  productSubCategoryData,
  productCategoryData,
}) {
  const path = [
    {
      name: productCategoryData.data.productCategories[0].title,
      link: '/categories/' + productCategoryData.data.productCategories[0].slug,
    },
    {
      name: productSubCategoryData.data.productCategories[0].title,
      link:
        '/categories/' +
        productCategoryData.data.productCategories[0].slug +
        '/' +
        productSubCategoryData.data.productCategories[0].slug,
    },
  ];

  return (
    <>
      <Breadcrumbs path={path} />
      <ProductDetails productDetails={productDetails} />
    </>
  );
}

export async function getServerSideProps(context) {
  const slug = context.query.slug;

  const apolloClient = initializeApollo(null, context.locale);
  const productDetails = await apolloClient.query({
    query: ProductDetailsQuery,
    variables: {
      filter: {
        slug: { eq: slug },
        isActive: { is: true },
      },
    },
    context: {
      headers: {
        lang: context.locale,
      },
    },
  });

  const subCategoryId = productDetails.data.products[0].categoryId;

  const productSubCategoryData = await apolloClient.query({
    query: ProductCategoriesQuery,
    variables: {
      filter: {
        isActive: { is: true },
        id: { eq: subCategoryId },
      },
    },
    context: {
      headers: {
        lang: context.locale,
      },
    },
  });

  const categoryId = productSubCategoryData.data.productCategories[0].parent;

  const productCategoryData = await apolloClient.query({
    query: ProductCategoriesQuery,
    variables: {
      filter: {
        isActive: { is: true },
        id: { eq: categoryId },
      },
    },
    context: {
      headers: {
        lang: context.locale,
      },
    },
  });

  return {
    props: {
      productDetails: productDetails.data,
      productSubCategoryData: productSubCategoryData,
      productCategoryData: productCategoryData,
    },
  };
}

export default ProductDetailsComponent;
