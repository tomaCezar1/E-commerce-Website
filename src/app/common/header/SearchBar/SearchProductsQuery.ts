import { gql } from '@apollo/client';

export const SearchProductsQuery = gql`
  query SearchProducts($searchQuery: String) {
    products(
      filter: { name: { iLike: $searchQuery }, isActive: { is: true } }
    ) {
      id
      name
      images
      price
      slug
    }
  }
`;

export interface Product {
  id: string;
  name: string;
  title: string[];
}

export interface FoundProductsList {
  foundProducts: Product[];
}
