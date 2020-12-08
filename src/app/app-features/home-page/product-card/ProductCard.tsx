import { useState } from 'react'
import FavoriteEmpty from '../../../../../public/svg/FavoriteEmpty.svg'
import FavoriteActive from '../../../../../public/svg/FavoriteActive.svg'
import CartIcon from '../../../../../public/svg/CartIcon.svg'

function ProductCard() {
  const sampleImg = 'https://cdn.incoden.com/Diferite/not-found.png'

  const [isActive, setActive] = useState(false)
  const [onSale, setSale] = useState(true)
  const [inStock, setStock] = useState(true)

  return (
    <>
      <div
        className={`product-card-container ${inStock ? null : 'out-of-stock'}`}
      >
        {onSale ? (
          <div className="on-sale">
            <p className="on-sale-text">-50%</p>
          </div>
        ) : null}
        <div className="product-card-container-flex">
          <img src={sampleImg} alt="image" className="product-card-image" />
          <p className="product-card-name">Bec LED 11W 2700K (E27)</p>
          <div className="product-card-price">
            {onSale ? (
              <div className="discounted-price-div">
                <p className="crossed-price">50 lei</p>
                <p className="discounted-price">50 lei</p>
              </div>
            ) : (
              <p className="basic-price">50 lei</p>
            )}
            {inStock ? null : (
              <p className="produs-in-stock">Produsul nu este in stock</p>
            )}
          </div>
          <div className="product-card-cart">
            <i style={{ cursor: 'pointer' }}>
              {isActive ? <FavoriteActive /> : <FavoriteEmpty />}
            </i>
            <div className="add-to-cart">
              <CartIcon />
              <p className="product-card-add-text">Adaugă în coș</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
