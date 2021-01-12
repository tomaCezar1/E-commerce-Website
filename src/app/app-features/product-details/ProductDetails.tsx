import ProductImages from './ProductImages';
import CartIcon from '../../../../public/svg/CartIcon.svg';
import { useState, useEffect, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { TechSpecsQuery } from './ProductDetailsQuery';
import { Skeleton, useToast, useMediaQuery } from '@chakra-ui/react';
import { AppContext } from '../../../context';
import Toast from '../../common/toast/Toast';
import { createMarkup } from '../../../utils/index';
import FavoriteEmpty from '../../../../public/svg/FavoriteEmpty.svg';
import FavoriteActive from '../../../../public/svg/FavoriteActive.svg';
import { RecommendedProductsQuery } from './RecommendedProdQuery';
import ProductCard from '../home-page/ProductCard/ProductCard';
import LeftArrow from '../../../../public/svg/LeftPartnerIcon.svg';
import RightArrow from '../../../../public/svg/LeftPartnerIcon.svg';

function ProductDetails({ productDetails }) {
  const details = productDetails?.products[0];
  const toast = useToast();
  const id = details.id;
  const { addToCart, favorites, addToFavorites } = useContext(AppContext);
  const [qty, setQty] = useState(1);
  const [isAvailable, setAvailable] = useState(null);
  const [x, setX] = useState(0);
  const favoritesIds = favorites.map((el) => el.id);
  const filtered = favorites.filter((favorite) => favorite.id === details.id);
  const [isLargerThan1250] = useMediaQuery('(min-width: 1250px)');
  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');
  const [isLargerThan580] = useMediaQuery('(min-width: 580px)');
  const [isLargerThan0] = useMediaQuery('(min-width: 0px)');

  const addToFavoritesList = (event, product) => {
    event.stopPropagation();
    addToFavorites(product);
  };

  let sale: number;

  if (details.isPromo) {
    sale = Math.floor(
      ((details.price - details.newPrice) / details.price) * 100
    );
  } else {
    sale = 0;
  }

  const productId = id;
  const recommendedQuery = useQuery(RecommendedProductsQuery, {
    variables: { productId },
  });

  const loadingRecommended = recommendedQuery.loading;

  const recommendedData = recommendedQuery.data?.recommendedProducts;

  const { loading, data } = useQuery(TechSpecsQuery, {
    variables: { id },
  });

  let techFields = [];
  let techFieldsSecond = [];

  const vendorObject = {
    name: 'Producator',
    value: details.vendor,
  };

  const typeObject = {
    name: 'Tip',
    value: details.type,
  };

  if (data && data.techSpecs && data.techSpecs.fields) {
    const fields = data.techSpecs.fields.filter((product) => product.value);
    if (fields.length > 7) {
      techFields = fields.slice(0, Math.round(fields.length / 2));
      techFieldsSecond = fields.slice(Math.round(fields.length / 2));
    } else {
      techFields = fields;
    }
    if (details.type) {
      techFields.unshift(typeObject);
    }
    if (details.vendor) {
      techFields.unshift(vendorObject);
    }
  }

  const useLoaded = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => setLoaded(true), []);
    return loaded;
  };

  const loaded = useLoaded();

  useEffect(() => {
    if (details.available) {
      setAvailable(true);
    } else {
      setAvailable(false);
    }
  }, []);

  let goLeft, goRight;

  //Recommended Products Slider
  if (isLargerThan1250) {
    goLeft = () => {
      x === 0 ? null : setX(x + 100);
    };

    goRight = () => {
      x === -100 * (recommendedData.length - 4) ? null : setX(x - 100);
    };
  } else if (isLargerThan770) {
    goLeft = () => {
      x === 0 ? null : setX(x + 100);
    };

    goRight = () => {
      x === -100 * (recommendedData.length - 3) ? null : setX(x - 100);
    };
  } else if (isLargerThan580) {
    goLeft = () => {
      x === 0 ? null : setX(x + 100);
    };

    goRight = () => {
      x === -100 * (recommendedData.length - 2) ? null : setX(x - 100);
    };
  } else if (isLargerThan0) {
    goLeft = () => {
      x === 0 ? null : setX(x + 100);
    };

    goRight = () => {
      x === -100 * (recommendedData.length - 1) ? null : setX(x - 100);
    };
  }

  return (
    <>
      <div className="product-details-container">
        <div className="product-details-flex">
          <h1 className="product-details-title-responsive">{details.name}</h1>
          <div className="product-details-slideshow">
            <ProductImages images={details.images} />
          </div>
          <div className="product-details-content">
            <h1 className="product-details-title">{details.name}</h1>
            <div className="product-details-info">
              {isAvailable ? (
                <p className="product-details-in-stock">
                  Produsul este în stoc
                </p>
              ) : (
                <p className="product-details-not-in-stock">
                  {productDetails.products[0].notAvailableCustomText
                    ? productDetails.products[0].notAvailableCustomText
                    : 'Produsul nu este în stoc'}
                </p>
              )}

              <p className="product-details-serial-nb">{details.articleCode}</p>
            </div>
            <div
              className="product-details-text"
              dangerouslySetInnerHTML={createMarkup(details.description)}
            />
            <div className="product-details-cart-price">
              {sale > 0 ? (
                <div className="discounted-price-div-mobile">
                  <p className="crossed-price">{details?.price}</p>
                  <p className="discounted-price discounted-price-lg">
                    {details?.newPrice} lei
                  </p>
                </div>
              ) : (
                <p className="product-details-price">{details?.price} lei</p>
              )}
              <div className="product-details-add-to-cart-flex">
                <div className="product-details-counter">
                  <div
                    className="product-details-counters"
                    onClick={() => {
                      if (qty > 1) {
                        setQty(qty - 1);
                      }
                    }}
                  >
                    <p>-</p>
                  </div>
                  <div className="product-details-center-counter">
                    <input
                      className="product-qty-input"
                      type="number"
                      value={qty}
                      onChange={(e) => setQty(+e.target.value)}
                      min={1}
                    />
                  </div>
                  <div
                    className="product-details-counters"
                    onClick={() => setQty(qty + 1)}
                  >
                    <p>+</p>
                  </div>
                </div>

                <i
                  className="product-details-favorites"
                  style={{ cursor: 'pointer' }}
                  onClick={(event) => {
                    addToFavoritesList(event, details);
                  }}
                >
                  {filtered.length > 0 && loaded ? (
                    <FavoriteActive />
                  ) : (
                    <FavoriteEmpty />
                  )}
                </i>

                <div
                  className="product-details-add-to-cart"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(details, qty);
                    toast({
                      render: ({ onClose }) => (
                        <Toast
                          description={`Produsul ${details.name} a fost adăugat cu succes!`}
                          handleClose={onClose}
                        />
                      ),
                      status: 'success',
                      duration: 5000,
                      isClosable: true,
                      position: 'top',
                    });
                  }}
                >
                  <CartIcon />
                  <p className="product-details-add-text">Adaugă în coș</p>
                </div>
              </div>

              <div className="product-details-add-to-cart-mobile">
                <div className="counter-and-fav-mobile">
                  <i
                    className="product-details-favorites"
                    style={{ cursor: 'pointer' }}
                    onClick={(event) => {
                      addToFavoritesList(event, details);
                    }}
                  >
                    {filtered.length > 0 && loaded ? (
                      <FavoriteActive />
                    ) : (
                      <FavoriteEmpty />
                    )}
                  </i>

                  <div className="product-details-counter">
                    <div
                      className="product-details-counters"
                      onClick={() => {
                        if (qty > 1) {
                          setQty(qty - 1);
                        }
                      }}
                    >
                      <p>-</p>
                    </div>
                    <div className="product-details-center-counter">
                      <input
                        className="product-qty-input"
                        type="number"
                        value={qty}
                        onChange={(e) => setQty(+e.target.value)}
                        min={1}
                      />
                    </div>
                    <div
                      className="product-details-counters"
                      onClick={() => setQty(qty + 1)}
                    >
                      <p>+</p>
                    </div>
                  </div>
                </div>
                <div
                  className="product-details-add-to-cart"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(details, qty);
                    toast({
                      render: ({ onClose }) => (
                        <Toast
                          description={`Produsul ${details.name} a fost adăugat cu succes!`}
                          handleClose={onClose}
                        />
                      ),
                      status: 'success',
                      duration: 5000,
                      isClosable: true,
                      position: 'top',
                    });
                  }}
                >
                  <CartIcon />
                  <p className="product-details-add-text">Adaugă în coș</p>
                </div>
              </div>
            </div>
            <div className="product-details-questions">
              <p>Ai o intrebare?</p>&nbsp;
              <a>Contactează-ne</a>
            </div>
          </div>
        </div>

        {/* Characteristics tables */}

        {!loading && techFields && techFields.length > 0 && (
          <div className="characteristics-tables">
            <div className="characteristics-table">
              <table className="table">
                <thead>
                  <tr className="table-head">
                    <th>Caracteristici</th>
                  </tr>
                </thead>
                <tbody>
                  {techFields.map((spec, index) => {
                    return (
                      <tr key={index}>
                        <th>{spec.name}</th>
                        <td>
                          {spec.value}&nbsp;
                          {spec.suffix}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {techFieldsSecond && techFieldsSecond.length > 0 && (
              <div
                className="characteristics-table"
                style={{ marginLeft: '56px' }}
              >
                <table className="table">
                  <thead>
                    <tr className="table-head">
                      <th>Caracteristici</th>
                    </tr>
                  </thead>
                  <tbody>
                    {techFieldsSecond.map((spec, index) => {
                      return (
                        <tr key={index}>
                          <th>{spec.name}</th>
                          <td>
                            {spec.value}&nbsp;
                            {spec.suffix}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
        {loading && techFields && techFields.length > 0 && (
          <div
            className="flex-row full-width"
            style={{ margin: '80px 0 62px' }}
          >
            <div className="full-width">
              <Skeleton height="51px" style={{ borderRadius: '16px' }} />
              <Skeleton
                height="201px"
                style={{ marginTop: '16px', borderRadius: '16px' }}
              />
            </div>
            <div className="full-width" style={{ marginLeft: '56px' }}>
              <Skeleton height="51px" style={{ borderRadius: '16px' }} />
              <Skeleton
                height="201px"
                style={{ marginTop: '16px', borderRadius: '16px' }}
              />
            </div>
          </div>
        )}
        {!loadingRecommended && recommendedData && recommendedData.length && (
          <div>
            <h1 className="product-details-title">Produse Recomandate</h1>
            <div className="recommended-products-container">
              <i id="goLeft" className="goLeft-details" onClick={goLeft}>
                <LeftArrow />
              </i>
              <div className="recommended-slider">
                {recommendedData.map((item) => {
                  return (
                    <div
                      className="recommended-slide"
                      key={item.id}
                      style={{ transform: `translateX(${x}%)` }}
                    >
                      <ProductCard
                        product={item}
                        isFavorite={
                          favoritesIds.indexOf(item.id) === -1 ? false : true
                        }
                      />
                    </div>
                  );
                })}
              </div>
              <i
                id="goRight"
                className="details-arrow-right goRight-details"
                onClick={goRight}
                style={{ transform: 'rotate(180deg)' }}
              >
                <RightArrow />
              </i>
            </div>
          </div>
        )}
        {loadingRecommended && (
          <div className=" full-width" style={{ margin: '80px 0 62px' }}>
            <Skeleton height="445px" style={{ borderRadius: '16px' }} />
          </div>
        )}
      </div>
    </>
  );
}

export default ProductDetails;
