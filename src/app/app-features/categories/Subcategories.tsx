import { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { Select } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';
import ProductCard from '../../app-features/home-page/product-card/ProductCard';
import Pagination from '../../common/pagination/Pagination';
import { ProductCategoriesQuery } from './ProductCategoriesQueries';

export default function Subcategories({
  products,
  subcategory,
  productsCount,
  currentPage,
  category,
}): JSX.Element {
  const [pagesCount, setPagesCount] = useState(1);
  const [sortOrder, setSortOrder] = useState('');
  const router = useRouter();
  const limit = 20;

  useEffect(() => {
    setSortOrder(router.query.sort as any);

    setPagesCount(Math.ceil(productsCount / limit));
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

    setSortOrder(event.target.value);

    await router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  const path = [
    {
      name: category.title,
      link: '/categories/' + router.query.categorySlug,
    },
    {
      name: subcategory.title,
      link:
        '/categories/' +
        router.query.categorySlug +
        '/' +
        router.query.subcategorySlug,
    },
  ];

  return (
    <div className="subcategories-page-wrapper">
      <Breadcrumbs path={path} />
      <div className="title-1">{subcategory?.title}</div>
      <div className="subcategories-products-container">
        <div className="subcategories-filter">filtre</div>
        <div>
          <div className="sorting-bar-wrapper">
            <div className="sorting-options">
              <Select
                name="sorting"
                onChange={sortingHandler}
                value={sortOrder}
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
              return <ProductCard key={product.id} product={product} small />;
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
