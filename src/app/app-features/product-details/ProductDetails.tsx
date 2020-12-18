import ProductImages from "./ProductImages";
import CartIcon from "../../../../public/svg/CartIcon.svg";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { TechSpecsQuery } from "./ProductDetailsQuery";

function ProductDetails({ productDetails }) {
  const details = productDetails?.products[0];
  const id = details.id;

  const [isAvailable, setAvailable] = useState(null);

  const { loading, error, data } = useQuery(TechSpecsQuery, {
    variables: { id },
  });

  const techSpecs = data?.techSpecs;
  const fieldsLength = data?.techSpecs.fields.length;
  console.log(techSpecs);
  const firstHalf = fieldsLength / 2 - 1;
  const secondHalf = fieldsLength / 2;
  console.log(firstHalf, secondHalf);

  useEffect(() => {
    if (details.available) {
      setAvailable(true);
    } else {
      setAvailable(false);
    }
  }, []);

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
            <p className="product-details-text">{details.description}</p>
            <a className="product-details-detalii">Mai multe detalii</a>
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

                <div className="product-details-add-to-cart">
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
        <div className="characteristics-tables">
          <div className="characteristics-table">
            <table className="table">
              <thead>
                <tr className="table-head">
                  <th>Caracteristici</th>
                </tr>
              </thead>
              {fieldsLength < 7 ? (
                <tbody>
                  {techSpecs.fields.map((spec) => {
                    return (
                      <tr>
                        <th>{spec.name}</th>
                        <td>{spec.value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : null}
              {/* {fieldsLength > 7 ? 
              <tbody>
              {techSpecs.fields.map((spec) => {
                return (
                  <tr>
                    <th>{spec.name}</th>
                    <td>{spec.value}</td>
                  </tr>
                );
              })}
            </tbody>
            : null} */}
            </table>
          </div>
          <div className="characteristics-table">
            <table className="table">
              <thead>
                <tr className="table-head">
                  <th>Caracteristici</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Tip</th>
                  <td>Standard</td>
                </tr>
                <tr>
                  <th>Putere</th>
                  <td>1500W</td>
                </tr>
                <tr>
                  <th>Tensiune</th>
                  <td>220V</td>
                </tr>
                <tr>
                  <th>Model</th>
                  <td>PTWT21</td>
                </tr>
                <tr>
                  <th>Temperatura</th>
                  <td>5600K</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
