import ProductCard from '../product-card/ProductCard';
import { AppContext } from '../../../../context';
import { useContext } from 'react';

function ProductList({ homePageInfo }): JSX.Element {
  const { favorites } = useContext(AppContext);
  const items = homePageInfo.products;
  const isFavorite = favorites.map((el) => el.id);

  return (
    <div className="product-list-container">
      <h1 className="product-list-header">Produsele Cegoltar</h1>
      <div className="cards-container">
        {items?.map((item, index) => {
          return (
            <ProductCard
              product={item}
              key={index}
              isFavorite={isFavorite}
              small={false}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
