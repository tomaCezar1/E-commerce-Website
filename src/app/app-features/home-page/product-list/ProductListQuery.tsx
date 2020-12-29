import { gql } from '@apollo/client';

export const ProductListQuery = gql`
  query ProductList(
    $filter: ProductFilter = {}
    $sorting: [ProductSort!] = [{ field: createdAt, direction: ASC }]
    $offset: Int
  ) {
    products(
      filter: $filter
      sorting: $sorting
      paging: { limit: 20, offset: $offset }
    ) {
      id
      sortOrder
      name
      images
      price
      newPrice
      isPromo
      promoDiscount
      available
      slug
      notAvailableCustomText
      articleCode
      isPromo
    }
  }
`;

export const ProductsCountQuery = gql`
  query ProductList($filter: ProductAggregateFilter = {}) {
    productAggregate(filter: $filter) {
      count {
        id
      }
    }
  }
`;
