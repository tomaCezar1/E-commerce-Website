import { useState, useEffect, useCallback, useContext } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import Link from 'next/link';
import { AppContext } from '../../../context';
import { cartTotal, formatPrice } from '../../../utils';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { validate, createMarkup } from '../../../utils';
import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';

export default function CartPage(): JSX.Element {
  const { cart, addToCart, removeFromCart, clearCart, appContext } = useContext(
    AppContext
  );
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showEmptyModal, setShowEmptyModal] = useState(false);
  const [, updateState] = useState();
  const { dictionary } = appContext;

  const forceUpdate = useCallback(() => updateState({}), []);
  const [renderCartLength, setRenderCartLength] = useState(false);

  useEffect(() => {
    setRenderCartLength(true);
  }, []);

  const path = [
    {
      name: dictionary.cart,
      link: '/cart',
    },
  ];

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="cart-page-container" suppressHydrationWarning={true}>
      <Breadcrumbs path={path} />
      {orderSuccess ? (
        <div className="no-items-text">{dictionary.orderSuccess}</div>
      ) : renderCartLength && cart.length > 0 ? (
        <div className="cart-items-wrapper">
          <div className="container-items">
            <div className="cart-items-headings">
              <span className="cart-heading-first">{dictionary.products}</span>
              <span className="cart-heading-text">{dictionary.price}</span>
              <span className="cart-heading-text">{dictionary.quantity}</span>
              <span className="cart-heading-text">{dictionary.total}</span>
            </div>
            <div className="cart-items-list">
              {cart.map((product) => {
                return (
                  <div key={product.id} className="cart-product-wrapper">
                    <Link
                      href="/product/[slug]"
                      as={`/product/${product.slug}`}
                    >
                      <div className="cart-product-image-info">
                        <img
                          src={product.images[0]}
                          alt="Product image"
                          className="cart-product-image"
                        />
                        <div className="cart-product-info">
                          <span className="cart-product-name">
                            {product.name}
                          </span>
                          <div
                            className="cart-product-description"
                            dangerouslySetInnerHTML={createMarkup(
                              product.description
                            )}
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="cart-product-price">
                      {product.isPromo ? product.newPrice : product.price}
                      {dictionary.lei}
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
                    <div className="mobile-price-qty">
                      <div className="cart-product-price-mobile">
                        {product.isPromo ? product.newPrice : product.price}
                        {dictionary.lei}
                      </div>
                      <div className="cart-product-qty-wrap-mobile">
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
                    </div>
                    <div className="cart-product-total">
                      {product.isPromo
                        ? (product.newPrice * product.qty).toFixed(2)
                        : (product.price * product.qty).toFixed(2)}
                      {dictionary.lei}
                    </div>
                    <div
                      className="remove-cart-item"
                      onClick={() => removeFromCart(product)}
                    />
                  </div>
                );
              })}
            </div>
            <div className="cart-total-wrapper">
              <div className="cart-buttons-wrapper">
                <div
                  className="clear-cart-button"
                  onClick={() => setShowEmptyModal(true)}
                >
                  {dictionary.clearCart}
                </div>
                <Modal
                  isOpen={showEmptyModal}
                  onClose={() => setShowEmptyModal(false)}
                  isCentered
                >
                  <ModalOverlay />
                  <ModalContent style={{ maxWidth: 320 }}>
                    <ModalCloseButton />
                    <ModalBody>
                      <div className="modal-empty-text">
                        {dictionary.clearCartConfirm}
                      </div>
                      <div className="modal-buttons-wrapper">
                        <button
                          className="btn outline"
                          onClick={() => {
                            clearCart();
                            setShowEmptyModal(false);
                          }}
                        >
                          {dictionary.yes}
                        </button>
                        <button
                          className="btn"
                          onClick={() => setShowEmptyModal(false)}
                        >
                          {dictionary.no}
                        </button>
                      </div>
                    </ModalBody>
                  </ModalContent>
                </Modal>
                <div
                  className="place-order-button"
                  onClick={() => setShowModal(true)}
                >
                  {dictionary.placeOrder}
                </div>
              </div>
              <div className="cart-total-price">
                <span>{dictionary.total}:&nbsp;</span>
                <span>{formatPrice(cartTotal(cart))}</span>
                <span>&nbsp;{dictionary.lei}</span>
              </div>
            </div>
          </div>
          <Modal isOpen={showModal} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent style={{ maxWidth: 320 }}>
              <ModalCloseButton />
              <ModalBody>
                <CheckoutForm
                  validate={validate}
                  setOrderSuccess={setOrderSuccess}
                  insideModal
                />
              </ModalBody>
            </ModalContent>
          </Modal>
          <CheckoutForm validate={validate} setOrderSuccess={setOrderSuccess} />
        </div>
      ) : (
        <div className="no-items-text">{dictionary.emptyCart}</div>
      )}
    </div>
  );
}
