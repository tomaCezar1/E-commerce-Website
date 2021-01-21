import { gql } from '@apollo/client';

export const BlogPostsQuery = gql`
  query BlogList($filter: BlogFilter = {}) {
    blogs(filter: $filter, sorting: { field: createdAt, direction: DESC }) {
      id
      title
      content
      slug
      createdAt
      previewDesc
      previewImg
      i18n
    }
  }
`;

export const BlogQuery = gql`
  query BlogPost($id: ID!) {
    blog(id: $id) {
      id
      title
      content
      slug
      createdAt
      i18n
    }
  }
`;

export interface IBlogPosts {
  id: string;
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  i18n: string;
}

export interface IBlogPostsData {
  productCategories: IBlogPosts[];
}
