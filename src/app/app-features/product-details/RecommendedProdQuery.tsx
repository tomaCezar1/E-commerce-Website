import { gql } from '@apollo/client';

export const RecommendedProductsQuery = gql`
  query($productId: String!) {
    recommendedProducts(productId: $productId) {
      articleCode
      available
      description
      images
      isPromo
      name
      newPrice
      notAvailableCustomText
      price
      promoDiscount
      slug
      sortOrder
    }
  }
`;

export interface IRecommendedProducts {
  name: string;
  price: number;
}
