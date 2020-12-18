import { gql } from '@apollo/client'

export const ProductListQuery = gql`
  query {
    products(filter: { isHomePage: { is: false } }) {
      id
      name
      images
      price
      newPrice
      available
      notAvailableCustomText
      isPromo
    }
  }
`
export interface IProductList {
  products: IProductListItems[]
}

export interface IProductListItems {
  id: string
  name: string
  images: [string]
  price: number
  newPrice: number
  available: boolean
  notAvailableCustomText: string
}
