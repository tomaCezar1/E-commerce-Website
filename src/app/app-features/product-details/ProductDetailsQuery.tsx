import { gql } from '@apollo/client';

export const ProductDetailsQuery = gql`
  query ProductDetails($filter: ProductFilter = {}) {
    products(filter: $filter) {
      slug
      name
      id
      images
      description
      price
      newPrice
      isPromo
      available
      articleCode
      categoryId
    }
  }
`;

export const TechSpecsQuery = gql`
  query TechSpecs($id: ID!) {
    techSpecs(productId: $id) {
      fields
    }
  }
`;
