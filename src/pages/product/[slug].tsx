import ProductDetails from "../../app/app-features/product-details/ProductDetails";
import { ProductDetailsQuery } from "../../app/app-features/product-details/ProductDetailsQuery";
import Breadcrumbs from "../../app/common/breadcrumbs/Breadcrumbs";
import { initializeApollo } from "../../app/lib/apolloClient";

function ProductDetailsComponent({ productDetails }) {
  console.log(productDetails);
  return (
    <>
      <div style={{ marginTop: "32px" }}></div>
      <Breadcrumbs />
      <ProductDetails productDetails={productDetails} />
    </>
  );
}

export async function getServerSideProps(context) {
  const slug = context.query.slug;

  const apolloClient = initializeApollo();
  const productDetails = await apolloClient.query({
    query: ProductDetailsQuery,
    variables: {
      filter: {
        slug: { eq: slug },
      },
    },
  });

  return {
    props: {
      productDetails: productDetails.data,
    },
  };
}

export default ProductDetailsComponent;
