import { useState, useCallback, useContext } from "react";
import { AppContext } from '../../../context'
import Breadcrumbs from "../../common/breadcrumbs/Breadcrumbs";

export default function CartPage(): JSX.Element {
  const { cart, addToCart, removeFromCart } = useContext(AppContext)

  const [, updateState] = useState()

  const forceUpdate = useCallback(() => updateState({}), [])

  return (
    <div className="cart-page-container">
      <Breadcrumbs />
      <div className="cart-items-wrapper">
        <div className="cart-items-list">
          <div className="cart-items-headings">
            <span className="cart-heading-first">Item</span>
            <span>Pret</span>
            <span>Cantitate</span>
            <span>Total</span>
          </div>
          {cart.map(product => {
            return (
              <div key={product.id}>
                {product.name}
              </div>
            )
          })}
        </div>
        <div className="checkout-wrapper" />
      </div>
    </div>
  )
}