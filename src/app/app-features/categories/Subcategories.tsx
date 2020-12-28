import { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { Select } from '@chakra-ui/react';
import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';
import ProductCard from '../../app-features/home-page/product-card/ProductCard';
import Pagination from '../../common/pagination/Pagination';

export default function Subcategories({
  products,
  subcategory,
  productsCount,
  currentPage,
}): JSX.Element {
  const [isLoading, setLoading] = useState(false);
  const [pagesCount, setPagesCount] = useState(1);
  const router = useRouter();
  const limit = 20;

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);

    const currentPath = router.pathname;
    const currentQuery = router.query;

    currentQuery.sort = '';

    Router.push({
      pathname: currentPath,
      query: currentQuery,
    });

    setPagesCount(Math.ceil(productsCount / limit));

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
    };
  }, []);

  const paginationHandler = async (page) => {
    const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.page = page.selected + 1;

    await router.push({
      pathname: currentPath,
      query: currentQuery,
    });

    window.scrollTo(0, 0);
  };

  const sortingHandler = async (event) => {
    const currentPath = router.pathname;
    const currentQuery = router.query;

    currentQuery.sort = event.target.value;

    await router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  return (
    <div className="subcategories-page-wrapper">
      <Breadcrumbs />
      <div className="title-1">{subcategory?.title}</div>
      <div className="subcategories-products-container">
        <div className="subcategories-filter">filtre</div>
        <div>
          <div className="sorting-bar-wrapper">
            <div className="sorting-options">
              <Select
                name="sorting"
                onChange={sortingHandler}
                value={router.query.sort}
                className="sorting-input"
              >
                <option value="" disabled hidden>
                  Sortare după
                </option>
                <option value="cheap" className="sorting-option-text">
                  Preț ascendent
                </option>
                <option value="expensive" className="sorting-option-text">
                  Preț descendent
                </option>
                <option value="new" className="sorting-option-text">
                  Cele mai noi
                </option>
                <option value="old" className="sorting-option-text">
                  Cele mai vechi
                </option>
              </Select>
            </div>
          </div>
          <div className="subcategories-grid">
            {products.map((product) => {
              return (
                <ProductCard key={product.id} product={product} size="small" />
              );
            })}
          </div>
          {pagesCount > 1 && (
            <Pagination
              paginationHandler={paginationHandler}
              pageCount={pagesCount}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
}
