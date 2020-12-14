import { gql } from '@apollo/client'

export const CarouselQuery = gql`
  query {
    carouselItems {
      image
      link
    }
  }
`
export interface ICarouselItems {
  carouselItems: ICarouselItem[]
}

export interface ICarouselItem {
  image: string
  link: string
}
