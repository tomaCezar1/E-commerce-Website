import { useRouter } from 'next/router';
import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';
import ProductCard from '../../app-features/home-page/product-card/ProductCard';

export default function Subcategories({ products }): JSX.Element {
  const { subcategorySlug } = useRouter().query;

  return (
    <div className="subcategories-page-wrapper">
      <Breadcrumbs />
      <div className="title-1">{subcategorySlug}</div>
      <div className="subcategories-products-container">
        <div className="subcategories-filter"></div>
        <div>
          <div
            style={{
              width: '100%',
              height: 35,
              background: 'green',
              marginBottom: 15,
            }}
          />
          <div className="subcategories-grid">
            {products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
