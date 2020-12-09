import ProductCard from '../product-card/ProductCard'
import { useQuery } from '@apollo/client'
import { IProductList, ProductListQuery } from './ProductListQuery'

function ProductList(): JSX.Element {
  const { loading, error, data } = useQuery<IProductList>(ProductListQuery)

  const items = data?.products
  console.log(items, typeof items)

  const sampleImg = 'https://cdn.incoden.com/Diferite/not-found.png'

  //Sunt necesare loading/error?
  if (loading) {
    console.log('loading')
  } else if (error) {
    console.log(`Error! ${error.message}`)
  }

  return (
    <div className="product-list-container">
      <h1 className="product-list-header">Produse Cegoltar</h1>
      <div className="cards-container">
        {items?.map((item) => {
          return (
            <ProductCard
              image={item.images}
              name={item.name}
              price={item.price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProductList
