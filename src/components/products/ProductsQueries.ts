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

export interface IProductCategories {
  id: string;
  parent: string;
  title: string;
}

export interface IProductCategoriesData {
  productCategories: IProductCategories[]
}