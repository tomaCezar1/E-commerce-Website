import { gql } from '@apollo/client'

export const ProductListQuery = gql`
  query ProductList(
    $filter: ProductFilter = {}
    $sorting: [ProductSort!] = [{ field: createdAt, direction: ASC }]
  ) {
    products(filter: $filter, sorting: $sorting) {
      id
      sortOrder
      name
      images
      price
      newPrice
      available
      notAvailableCustomText
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
