import { gql } from "@apollo/client";

export const ProductListQuery = gql`
  query ProductList(
    $filter: ProductFilter = {}
    $sorting: [ProductSort!] = [{ field: createdAt, direction: ASC }]
  ) {
    products(filter: $filter, sorting: $sorting) {
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
    }
  }
`;
