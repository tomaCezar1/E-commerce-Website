import { useRouter } from 'next/router';
import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';
import ProductCard from '../../app-features/home-page/product-card/ProductCard';

export default function Subcategories({ products, subcategory }): JSX.Element {
  const { subcategorySlug } = useRouter().query;

  return (
    <div className="subcategories-page-wrapper">
      <Breadcrumbs />
      <div className="title-1">{subcategory?.title}</div>
      <div className="subcategories-products-container">
        <div className="subcategories-filter">filtre</div>
        <div>
          <div
            style={{
              width: '100%',
              height: 35,
              marginBottom: 15,
            }}
          >
            Sortarea
          </div>
          <div className="subcategories-grid">
            {products.map((product) => {
              return (
                <ProductCard key={product.id} product={product} size="small" />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
