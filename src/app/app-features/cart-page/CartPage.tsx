import { useState, useCallback, useContext, useEffect } from 'react';
import { AppContext } from '../../../context';
import { cartTotal, formatPrice } from '../../../utils';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { validate } from '../../../utils';
import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';

export default function CartPage(): JSX.Element {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(AppContext);

  const [, updateState] = useState();

  const forceUpdate = useCallback(() => updateState({}), []);
  const [renderCartLength, setRenderCartLength] = useState(false);

  useEffect(() => {
    setRenderCartLength(true);
  }, []);

  return (
    <div className="cart-page-container" suppressHydrationWarning={true}>
      <Breadcrumbs />
      {renderCartLength && cart.length > 0 ? (
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
                        In mattis enim fringilla id et tincidunt id dignissim
                        pellentesque. Nunc turpis nulla lectus posuere nisl,
                        pellentesque lorem cursus semper.
                      </span>
                    </div>
                  </div>
                  <div className="cart-product-price">
                    {product.isPromo ? product.newPrice : product.price} lei
                  </div>
                  <div className="cart-product-qty-wrap">
                    <div
                      className="cart-qty-remove"
                      onClick={() => {
                        addToCart(product, -1);
                        forceUpdate();
                      }}
                    >
                      -
                    </div>
                    <div className="cart-product-qty">{product.qty}</div>
                    <div
                      className="cart-qty-add"
                      onClick={() => {
                        addToCart(product, 1);
                        forceUpdate();
                      }}
                    >
                      +
                    </div>
                  </div>
                  <div className="cart-product-total">
                    {product.isPromo
                      ? (product.newPrice * product.qty).toFixed(2)
                      : (product.price * product.qty).toFixed(2)}{' '}
                    lei
                  </div>
                  <div
                    className="remove-cart-item"
                    onClick={() => removeFromCart(product)}
                  />
                </div>
              );
            })}
            <div className="cart-total-wrapper">
              <div className="clear-cart-button" onClick={() => clearCart()}>
                Golește coșul
              </div>
              <div className="cart-total-price">
                Total: {formatPrice(cartTotal(cart))} lei
              </div>
            </div>
          </div>
          <CheckoutForm validate={validate} />
        </div>
      ) : (
        <div className="no-items-text">Coșul dumneavoastră este gol</div>
      )}
    </div>
  );
}
