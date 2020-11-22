import { gql } from "@apollo/client";

export const ProductCategoriesQuery = gql`
  query {
    productCategories {
    id
    parent
    title
    }
  }

`