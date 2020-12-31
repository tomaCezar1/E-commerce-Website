import Breadcrumbs from '../../../app/common/breadcrumbs/Breadcrumbs';
import ProductCard from '../home-page/product-card/ProductCard';
import { AppContext } from '../../../context';
import { useContext } from 'react';

export default function FavoritesPage(): JSX.Element {
  const { favorites } = useContext(AppContext);
  const isFavorite = favorites.map((el) => el.id);

  const path = [
    {
      name: 'Favorite',
      link: '/favorites',
    },
  ];

  return (
    <>
      <Breadcrumbs path={path} />
      <h1 className="product-list-header" style={{ marginTop: 32 }}>
        Produsele favorite
      </h1>
      {favorites.length > 0 ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 20,
            marginBottom: 70,
          }}
        >
          {favorites.map((favorite, index) => {
            return (
              <ProductCard
                product={favorite}
                key={index}
                isFavorite={isFavorite}
              />
            );
          })}
        </div>
      ) : (
        <div className="no-items-text">Nu aveți produse favorite</div>
      )}
    </>
  );
}
