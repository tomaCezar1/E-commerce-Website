import { useContext } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { AppContext } from '../../../../context';

function ProductList({ products }): JSX.Element {
  const { favorites, appContext } = useContext(AppContext);
  const { homeProduseCegoltar } = appContext.dictionary;

  const favoritesIds = favorites.map((el) => el.id);

  return (
    <div className="product-list-container">
      <h1 className="product-list-header">{homeProduseCegoltar}</h1>
      <div className="cards-container">
        {products.map((item, index) => {
          return (
            <ProductCard
              product={item}
              key={index}
              isFavorite={favoritesIds.indexOf(item.id) === -1 ? false : true}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
