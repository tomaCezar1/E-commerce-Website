import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { useToast } from '@chakra-ui/react';
import Image from 'next/image';
import FavoriteEmpty from '../../../../../public/svg/FavoriteEmpty.svg';
import FavoriteActive from '../../../../../public/svg/FavoriteActive.svg';
import CartIcon from '../../../../../public/svg/CartIcon.svg';
import { AppContext } from '../../../../context';
import Toast from '../../../common/toast/Toast';

function ProductCard({ product, small = false, isFavorite = false }) {
  const { addToCart, addToFavorites, appContext } = useContext(AppContext);
  const toast = useToast();
  const { dictionary } = appContext;
  let sale: number;

  const useLoaded = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => setLoaded(true), [small]);
    return loaded;
  };

  const loaded = useLoaded();

  if (product.isPromo) {
    sale = Math.floor(
      ((product.price - product.newPrice) / product.price) * 100
    );
  } else {
    sale = 0;
  }

  const addToFavoritesList = (event, product) => {
    event.stopPropagation();
    addToFavorites(product);
  };

  return (
    <>
      <Link href="/product/[slug]" as={`/product/${product.slug}`}>
        <div
          className={`product-card-container ${
            product.available ? '' : 'out-of-stock'
          } ${small ? 'product-container-small' : ''}`}
        >
          {sale ? (
            <div className="on-sale">
              <p className="on-sale-text">{sale ? `-${sale}%` : null}</p>
            </div>
          ) : null}
          <div className="product-card-container-flex">
            <div className="product-card-image-container">
              <Image
                src={product?.images[0]}
                alt="image"
                width={218}
                height={214}
                layout="responsive"
                className="product-card-image"
              />
            </div>
            <p className="product-card-name">{product?.name}</p>
            <div className="product-card-bottom">
              <div className="product-card-price">
                {sale > 0 ? (
                  <div className="discounted-price-div">
                    <p className="crossed-price">{product.price}</p>
                    <p className="discounted-price">
                      {product?.newPrice} {dictionary.lei}
                    </p>
                  </div>
                ) : (
                  <p className="basic-price">
                    {product?.price} {dictionary.lei}
                  </p>
                )}
              </div>
              {product.available ? (
                <p className="product-in-stock-invis">Asd</p>
              ) : (
                <p className="product-in-stock">
                  {product.notAvailableCustomText ? (
                    <span>{product.notAvailableCustomText}</span>
                  ) : (
                    <span>{dictionary.notAvailable}</span>
                  )}
                </p>
              )}
              <div className="product-card-cart">
                <i
                  className="fav-icons"
                  style={{ cursor: 'pointer' }}
                  onClick={
                    product.available
                      ? (event) => {
                          addToFavoritesList(event, product);
                        }
                      : (event) => {
                          event.stopPropagation();
                        }
                  }
                >
                  {product.available && isFavorite && loaded ? (
                    <i className="product-fav-icons">
                      <FavoriteActive />
                    </i>
                  ) : (
                    <i className="product-fav-icons">
                      <FavoriteEmpty />
                    </i>
                  )}
                </i>
                <div
                  className="add-to-cart"
                  onClick={
                    product.available
                      ? (e) => {
                          e.stopPropagation();
                          addToCart(product, 1);
                          toast({
                            render: ({ onClose }) => (
                              <Toast
                                description={`Produsul "${product.name}" a fost adăugat cu succes!`}
                                handleClose={onClose}
                              />
                            ),
                            position: 'top',
                          });
                        }
                      : (event) => {
                          event.stopPropagation();
                        }
                  }
                >
                  <i className="product-fav-cart-icon">
                    <CartIcon />
                  </i>
                  <p className="product-card-add-text">
                    {dictionary.addToCart}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
