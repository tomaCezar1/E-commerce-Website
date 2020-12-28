import Breadcrumbs from '../../../app/common/breadcrumbs/Breadcrumbs';
import ProductCard from '../home-page/product-card/ProductCard';

export default function FavoritesPage(): JSX.Element {
  return (
    <>
      <Breadcrumbs />
      <div className="no-items-text">
        <ProductCard />
      </div>
    </>
  );
}
