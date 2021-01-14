import { gql } from '@apollo/client';

export const DictionaryQuery = gql`
  query {
    dictionaryItems(paging: { limit: 0 }) {
      id
      key
      value
      ruValue
    }
  }
`;
