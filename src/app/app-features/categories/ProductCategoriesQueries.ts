import { gql } from '@apollo/client';

export const ProductCategoriesQuery = gql`
  query ProductCategories($filter: ProductCategoryFilter = {}) {
    productCategories(
      filter: $filter
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
      filter: { parent: { eq: $id } }
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

export const UiFiltersQuery = gql`
  query UiFilters($categoryId: ID!) {
    uiFilters(categoryId: $categoryId) {
      name
      type
      property
      values
      minValue
      maxValue
    }
  }
`;

export interface DropDownOption {
  label: string;
  value: string;
}

export interface UiFilter {
  name: string;
  type: 'DropDown' | 'InputRange';
  property: string;
  values?: DropDownOption[];
  minValue?: number;
  maxValue?: number;
}

export interface IProductCategories {
  id: string;
  parent: string;
  title: string;
}

export interface IProductCategoriesData {
  productCategories: IProductCategories[];
}
