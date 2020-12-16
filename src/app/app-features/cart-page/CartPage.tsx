import { useState, useCallback, useContext } from "react";
import { AppContext } from '../../../context'
import { cartTotal, clearCart } from '../../../utils'
import Breadcrumbs from "../../common/breadcrumbs/Breadcrumbs";

export default function CartPage(): JSX.Element {
  const { cart, addToCart, removeFromCart } = useContext(AppContext)

  const [, updateState] = useState()

  const forceUpdate = useCallback(() => updateState({}), [])

  return (
    <div className="cart-page-container">
      <Breadcrumbs />
      {cart.length > 0 ? (
        <div className="cart-items-wrapper">
        <div className="cart-items-list">
          <div className="cart-items-headings">
            <span className="cart-heading-first">Item</span>
            <span>Pret</span>
            <span>Cantitate</span>
            <span>Total</span>
          </div>
          {cart.map((product) => {
            return (
              <div key={product.id} className="cart-product-wrapper">
                <div className="cart-product-image-info">
                  <img
                    src={product.images[0]}
                    alt="Product image"
                    className="cart-product-image"
                  />
                  <div className="cart-product-info">
                    <span className="cart-product-name">{product.name}</span>
                    <span className="cart-product-description">
                      In mattis enim fringilla id et tincidunt 
                      id dignissim pellentesque. Nunc turpis nulla 
                      lectus posuere nisl, pellentesque lorem cursus 
                      semper.
                    </span>
                  </div>
                </div>
                <div className="cart-product-price">
                  {product.price} lei
                </div>
                <div className="cart-product-qty-wrap">
                  <div
                    className="cart-qty-remove"
                    onClick={() => {
                      addToCart(product, -1)
                      forceUpdate()
                    }}
                  >
                    -
                  </div>
                  <div className="cart-product-qty">
                    {product.qty}
                  </div>
                  <div
                    className="cart-qty-add"
                    onClick={() => {
                      addToCart(product, 1)
                      forceUpdate()
                    }}>
                    +
                  </div>
                </div>
                <div className="cart-product-total">
                  50 lei
                </div>
                <div
                  className="remove-cart-item"
                  onClick={() => removeFromCart(product)}
                />
              </div>
            )
          })}
          <div className="cart-total-wrapper">
            <div
              className="clear-cart-button"
              onClick={() => clearCart()}
            >
              Golește coșul
            </div>
            <div className="cart-total-price">Total: {cartTotal(cart)} lei</div>
          </div>
        </div>
        <div className="checkout-wrapper" />
      </div>
      ) : (
        <div className="no-items-text">
          Coșul dumneavoastră este gol
        </div>
      )}
    </div>
  )
}