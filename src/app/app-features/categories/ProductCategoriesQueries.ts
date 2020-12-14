import { gql } from "@apollo/client";

export const ProductCategoriesQuery = gql`
  query ProductCategories($filter: ProductCategoryFilter = {}) {
    productCategories(filter: $filter) {
      id
      title
      parent
      slug
    }
  }
`;

export const SubcategoriesQuery = gql`
  query ProductCategories($id: String){
    productCategories(filter: {parent:{eq: $id}}) {
      id
      title
      parent
      slug
      images
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
