import { gql } from '@apollo/client';

export const CarouselQuery = gql`
  query CarouselQuery(
    $sorting: [CarouselItemSort!] = [{ field: sortOrder, direction: ASC }]
  ) {
    carouselItems(sorting: $sorting) {
      image
      link
      sortOrder
    }
  }
`;
export interface CarouselItems {
  carouselItems: CarouselItem[];
}

export interface CarouselItem {
  image: string;
  link: string;
  sortOrder: number;
}
