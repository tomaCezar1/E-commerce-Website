import ProductImages from './ProductImages'

function ProductDetails() {
  const product1 = {
    id: 'asdf',
    images: [
      'https://cdn.incoden.com/Produse/cat1.jpg',
      'https://cdn.incoden.com/Produse/cat2.jpg',
    ],
  }

  return (
    <>
      <p>Some images</p>
      <ProductImages images={product1.images} />
    </>
  )
}

export default ProductDetails
