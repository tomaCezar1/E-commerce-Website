import ProductImages from './ProductImages'
import CartIcon from '../../../../public/svg/CartIcon.svg'

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
      <div className="product-details-container">
        <div className="product-details-flex">
          <div className="product-details-slideshow">
            <ProductImages images={product1.images} />
          </div>
          <div className="product-details-content">
            <h1 className="product-details-title">
              Bec LED 11W 2700K (E27)Bec LED 11W 2700K (E27)
            </h1>
            <div className="product-details-info">
              <p className="product-details-in-stock">Produsul este în stoc</p>
              <p className="product-details-serial-nb">SKU D551AI</p>
            </div>
            <p className="product-details-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              vestibulum penatibus velit dignissim amet, facilisis turpis
              fermentum integer. Non integer consectetur pretium tellus. Tortor,
              proin at maecenas proin turpis velit vestibulum tortor sed.
            </p>
            <a className="product-details-detalii">Mai multe detalii</a>
            <div className="product-details-cart-price">
              <h1 className="product-details-price">50 lei</h1>
              <div className="product-details-add-to-cart">
                <CartIcon />
                <p className="product-details-add-text">Adaugă în coș</p>
              </div>
            </div>
            <div className="product-details-counter">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
