import ProductImages from './ProductImages'

function ProductDetails() {
  const product1 = {
    id: 'asdf',
    images: [
      'https://cdn.incoden.com/Produse/cat1.jpg',
      'https://cdn.incoden.com/Produse/cat2.jpg',
      'https://cdn.incoden.com/Produse/cat1.jpg',
      'https://cdn.incoden.com/Produse/cat2.jpg',
      'https://cdn.incoden.com/Produse/cat1.jpg',
      'https://cdn.incoden.com/Produse/cat2.jpg',
      'https://cdn.incoden.com/Produse/cat1.jpg',
      'https://cdn.incoden.com/Produse/cat2.jpg',
    ],
  }

  return (
    <>
      <ProductImages images={product1.images} />
    </>
  )
}

export default ProductDetails
