import { gql } from '@apollo/client';

export const JobsListQuery = gql`
  query JobsList($filter: JobFilter = {}) {
    jobs(filter: $filter, sorting: { field: createdAt, direction: DESC }) {
      id
      title
      content
      createdAt
      i18n
    }
  }
`;
