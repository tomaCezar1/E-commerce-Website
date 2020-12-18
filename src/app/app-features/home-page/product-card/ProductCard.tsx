import { useState, useEffect } from "react";
import FavoriteEmpty from "../../../../../public/svg/FavoriteEmpty.svg";
import FavoriteActive from "../../../../../public/svg/FavoriteActive.svg";
import CartIcon from "../../../../../public/svg/CartIcon.svg";
import Link from "next/link";

function ProductCard({ product }) {
  const [isActive, setActive] = useState(false);

  let sale;

  if (product.isPromo) {
    sale = Math.floor(
      ((product.price - product.newPrice) / product.price) * 100
    );
  } else {
    sale = 0;
  }

  return (
    <>
      <Link href="/Produs/[slug]" as={`/Produs/${product.slug}`}>
        <div
          className={`product-card-container ${
            product.available ? "" : "out-of-stock"
          }`}
        >
          {sale ? (
            <div className="on-sale">
              <p className="on-sale-text">{sale ? `-${sale}%` : null}</p>
            </div>
          ) : null}
          <div className="product-card-container-flex">
            <img
              src={product?.images}
              alt="image"
              className="product-card-image"
            />
            <p className="product-card-name">{product?.name}</p>
            <div className="product-card-bottom">
              <div className="product-card-price">
                {sale > 0 ? (
                  <div className="discounted-price-div">
                    <p className="crossed-price">{product.price}</p>
                    <p className="discounted-price">{product?.newPrice} lei</p>
                  </div>
                ) : (
                  <p className="basic-price">{product?.price} lei</p>
                )}
                {product.available ? null : (
                  <p className="produs-in-stock">
                    {product?.notAvailableCustomText}
                    Produsul nu este in stock
                  </p>
                )}
              </div>
              <div className="product-card-cart">
                <i style={{ cursor: "pointer" }}>
                  {isActive ? <FavoriteActive /> : <FavoriteEmpty />}
                </i>
                <div className="add-to-cart">
                  <CartIcon />
                  <p className="product-card-add-text">Adaugă în coș</p>
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
