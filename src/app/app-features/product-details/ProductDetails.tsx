import ProductImages from './ProductImages';
import CartIcon from '../../../../public/svg/CartIcon.svg';
import { useState, useEffect, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { TechSpecsQuery } from './ProductDetailsQuery';
import { Skeleton } from '@chakra-ui/react';
import { AppContext } from '../../../context';
import { useToast } from '@chakra-ui/react';
import FavoriteEmpty from '../../../../public/svg/FavoriteEmpty.svg';
import FavoriteActive from '../../../../public/svg/FavoriteActive.svg';

function ProductDetails({ productDetails }) {
  const details = productDetails?.products[0];
  const toast = useToast();
  const id = details.id;
  const { addToCart, favorites, addToFavorites } = useContext(AppContext);
  const [isAvailable, setAvailable] = useState(null);

  const filtered = favorites.filter((favorite) => favorite.id === details.id);

  const addToFavoritesList = (event, product) => {
    event.stopPropagation();
    addToFavorites(product);
  };

  const { loading, data } = useQuery(TechSpecsQuery, {
    variables: { id },
  });

  let techFields = [];
  let techFieldsSecond = [];

  if (data && data.techSpecs && data.techSpecs.fields) {
    const fields = data.techSpecs.fields.filter((product) => product.value);
    if (fields.length > 7) {
      techFields = fields.slice(0, Math.round(fields.length / 2));
      techFieldsSecond = fields.slice(Math.round(fields.length / 2));
    } else {
      techFields = fields;
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

  const createMarkup = (html) => {
    return {
      __html: html,
    };
  };

  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleRemove = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className="product-details-container">
        <div className="product-details-flex">
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
                  Produsul nu este în stoc
                </p>
              )}

              <p className="product-details-serial-nb">{details.articleCode}</p>
            </div>
            <div
              className="product-details-text"
              dangerouslySetInnerHTML={createMarkup(details.description)}
            />
            <div className="product-details-cart-price">
              <h1 className="product-details-price">{details.price} lei</h1>

              <div className="product-details-add-to-cart-flex">
                <div className="product-details-counter">
                  <div
                    className="product-details-counters"
                    onClick={handleRemove}
                  >
                    <p>-</p>
                  </div>
                  <div className="product-details-center-counter">
                    <p>{counter}</p>
                  </div>
                  <div className="product-details-counters" onClick={handleAdd}>
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
                    addToCart(details, 1);
                    toast({
                      title: `Produsul ${details.name} a fost adăugat cu succes!`,
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
      </div>
    </>
  );
}

export default ProductDetails;
