import { gql } from '@apollo/client';

export const ProductCategoriesQuery = gql`
  query ProductCategories($filter: ProductCategoryFilter = {}) {
    productCategories(
      filter: $filter,
      sorting: { field: sortOrder, direction: ASC }
    ) {
      id
      title
      parent
      slug
      sortOrder
    }
  }
`;

export const SubcategoriesQuery = gql`
  query ProductCategories($id: String) {
    productCategories(
      filter: { parent: { eq: $id } },
      sorting: { field: sortOrder, direction: ASC }
    ) {
      id
      title
      parent
      slug
      images
      sortOrder
    }
  }
`;

export interface IProductCategories {
  id: string;
  parent: string;
  title: string;
}

export interface IProductCategoriesData {
  productCategories: IProductCategories[];
}
