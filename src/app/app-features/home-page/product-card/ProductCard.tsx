import { useState, useEffect } from 'react'
import FavoriteEmpty from '../../../../../public/svg/FavoriteEmpty.svg'
import FavoriteActive from '../../../../../public/svg/FavoriteActive.svg'
import CartIcon from '../../../../../public/svg/CartIcon.svg'

function ProductCard({ product }: IProductListData) {
  const [isActive, setActive] = useState(false)
  const [onSale, setSale] = useState(false)
  const [outOfStock, setStock] = useState(product?.available)

  useEffect(() => {
    if (product?.newPrice !== 0) {
      setSale(true)
    }
  })

  return (
    <>
      <div
        className={`product-card-container ${outOfStock ? '' : 'out-of-stock'}`}
      >
        {onSale && (
          <div className="on-sale">
            <p className="on-sale-text">-50%</p>
          </div>
        )}
        <div className="product-card-container-flex">
          <img
            src={product?.images}
            alt="image"
            className="product-card-image"
          />
          <p className="product-card-name">{product?.name}</p>
          <div className="product-card-price">
            {onSale ? (
              <div className="discounted-price-div">
                <p className="crossed-price">50 lei</p>
                <p className="discounted-price">{product?.newPrice} lei</p>
              </div>
            ) : (
              <p className="basic-price">{product?.price} lei</p>
            )}
            {outOfStock ? null : (
              <p className="produs-in-stock">
                {product?.notAvailableCustomText}
                Produsul nu este in stock
              </p>
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

interface IProductListData {
  product: {
    id: string
    name: string
    images: string
    price: number
    newPrice: number
    available: boolean
    notAvailableCustomText: string
  }
}
