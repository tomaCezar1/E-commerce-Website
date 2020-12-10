import { gql } from "@apollo/client";

export const ProductCategoriesQuery = gql`
  query {
    productCategories {
      id
      parent
      title
    }
  }
`;

export const SubcategoriesQuery = gql`
  query ProductCategories($id: String){
    productCategories(filter: {parent:{eq: $id}}) {
      title
      parent
      id
    }
  }
`;

export interface IProductCategories {
  id: string;
  parent: string;
  title: string;
}

export interface IProductCategoriesData {
  productCategories: IProductCategories[]
}