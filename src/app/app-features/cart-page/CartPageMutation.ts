import { gql } from '@apollo/client';

export const OrdersMutation = gql`
  mutation FetchOrders($order: OrderInput!) {
    createOneOrder(input: { order: $order }) {
      id
    }
  }
`;
