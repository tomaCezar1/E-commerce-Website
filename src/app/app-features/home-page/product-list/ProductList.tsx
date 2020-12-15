import ProductCard from '../product-card/ProductCard'
import { useQuery } from '@apollo/client'
import { IProductList, ProductListQuery } from './ProductListQuery'

function ProductList({ homePageInfo }): JSX.Element {
  const items = homePageInfo.products

  return (
    <div className="product-list-container">
      <h1 className="product-list-header">Produse Cegoltar</h1>
      <div className="cards-container">
        {items?.map((item, index) => {
          return <ProductCard product={item} key={index} />
        })}
      </div>
    </div>
  )
}

export default ProductList
