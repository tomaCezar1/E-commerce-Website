import { useContext, useState, useEffect } from 'react';
import FavoriteEmpty from '../../../../../public/svg/FavoriteEmpty.svg';
import FavoriteActive from '../../../../../public/svg/FavoriteActive.svg';
import CartIcon from '../../../../../public/svg/CartIcon.svg';
import Link from 'next/link';
import { useToast } from '@chakra-ui/react';
import { AppContext } from '../../../../context';

function ProductCard({ product, size, isFavorite = [] }) {
  const [isActive, setActive] = useState(false);
  const { addToCart, addToFavorites } = useContext(AppContext);
  const toast = useToast();

  let sale: number;

  const useLoaded = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => setLoaded(true), []);
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

  const filtered = isFavorite.filter((id) => id === product.id);

  const addToFavoritesList = (event, product) => {
    event.stopPropagation();
    addToFavorites(product);
  };

  return (
    <>
      <Link href="/Produs/[slug]" as={`/Produs/${product.slug}`}>
        <div
          className={`product-card-container product-card-container-${size} ${
            product.available ? '' : 'out-of-stock'
          }`}
        >
          {sale ? (
            <div className={`on-sale on-sale-${size}`}>
              <p className={`on-sale-text on-sale-text-${size}`}>
                {sale ? `-${sale}%` : null}
              </p>
            </div>
          ) : null}
          <div className="product-card-container-flex">
            <div>
              <img
                src={product?.images[0]}
                alt="image"
                className={`product-card-image product-card-image-${size}`}
              />
              <p className={`product-card-name product-card-name-${size}`}>
                {product?.name}
              </p>
            </div>
            <div className={`product-card-bottom product-card-bottom-${size}`}>
              <div className={`product-card-price product-card-price-${size}`}>
                {sale > 0 ? (
                  <div
                    className={`discounted-price-div discounted-price-div-${size}`}
                  >
                    <p className={`crossed-price crossed-price-${size}`}>
                      {product.price}
                    </p>
                    <p className={`discounted-price discounted-price-${size}`}>
                      {product?.newPrice} lei
                    </p>
                  </div>
                ) : (
                  <p className={`basic-price basic-price-${size}`}>
                    {product?.price} lei
                  </p>
                )}
                {product.available ? null : (
                  <p className={`produs-in-stock produs-in-stock-${size}`}>
                    {product?.notAvailableCustomText}
                    Produsul nu este in stock
                  </p>
                )}
              </div>
              <div className={`product-card-cart product-card-cart-${size}`}>
                <i
                  className="fav-icons"
                  style={{ cursor: 'pointer' }}
                  onClick={(event) => {
                    addToFavoritesList(event, product);
                  }}
                >
                  {product.available && filtered.length > 0 && loaded ? (
                    <FavoriteActive />
                  ) : (
                    <FavoriteEmpty />
                  )}
                </i>
                <div
                  className={`add-to-cart add-to-cart-${size}`}
                  onClick={
                    product.available
                      ? (e) => {
                          e.stopPropagation();
                          addToCart(product, 1);
                          toast({
                            title: `Produsul ${product.name} a fost adăugat cu succes!`,
                            status: 'success',
                            duration: 5000,
                            isClosable: true,
                            position: 'top',
                          });
                        }
                      : (event) => {
                          event.stopPropagation();
                        }
                  }
                >
                  <CartIcon />
                  <p
                    className={`product-card-add-text product-card-add-text-${size}`}
                  >
                    Adaugă în coș
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
