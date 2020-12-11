import ProductImages from './ProductImages'
import CartIcon from '../../../../public/svg/CartIcon.svg'
import { useState } from 'react'

function ProductDetails() {
  const product1 = {
    id: 'asdf',
    images: [
      'https://cdn.incoden.com/Produse/cat1.jpg',
      'https://cdn.incoden.com/Produse/cat2.jpg',
      'https://cdn.incoden.com/Produse/cat1.jpg',
      'https://cdn.incoden.com/Produse/cat2.jpg',
      'https://cdn.incoden.com/Produse/cat1.jpg',
      'https://cdn.incoden.com/Produse/cat2.jpg',
      'https://cdn.incoden.com/Produse/cat1.jpg',
      'https://cdn.incoden.com/Produse/cat2.jpg',
    ],
  }

  const [counter, setCounter] = useState(0)

  const handleAdd = () => {
    setCounter(counter + 1)
  }

  const handleRemove = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <div className="product-details-container">
        <div className="product-details-flex">
          <div className="product-details-slideshow">
            <ProductImages images={product1.images} />
          </div>
          <div className="product-details-content">
            <h1 className="product-details-title">
              Bec LED 11W 2700K (E27)Bec LED 11W 2700K (E27)
            </h1>
            <div className="product-details-info">
              <p className="product-details-in-stock">Produsul este în stoc</p>
              <p className="product-details-serial-nb">SKU D551AI</p>
            </div>
            <p className="product-details-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              vestibulum penatibus velit dignissim amet, facilisis turpis
              fermentum integer. Non integer consectetur pretium tellus. Tortor,
              proin at maecenas proin turpis velit vestibulum tortor sed.
            </p>
            <a className="product-details-detalii">Mai multe detalii</a>
            <div className="product-details-cart-price">
              <h1 className="product-details-price">50 lei</h1>

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
  )
}

export default ProductDetails
