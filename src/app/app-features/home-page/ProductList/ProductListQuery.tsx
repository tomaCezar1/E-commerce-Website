import { gql } from '@apollo/client';

export const ProductListQuery = gql`
  query ProductList(
    $filter: ProductFilter = {}
    $sorting: [ProductSort!] = [{ field: createdAt, direction: ASC }]
    $offset: Int
    $uiFilters: [UiFilterInput!] = []
  ) {
    products(
      filter: $filter
      sorting: $sorting
      paging: { limit: 20, offset: $offset }
      uiFilters: $uiFilters
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
      description
    }
  }
`;

export const ProductListQueryWithCount = gql`
    query ProductsWithCount(
        $filter: ProductFilter = {}
        $sorting: [ProductSort!] = [{ field: createdAt, direction: ASC }]
        $offset: Int
        $uiFilters: [UiFilterInput!] = []
    ) {
        productsWithCount(
            filter: $filter
            sorting: $sorting
            paging: { limit: 20, offset: $offset }
            uiFilters: $uiFilters
        ) {
            count
            nodes {
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
                description
            }
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
