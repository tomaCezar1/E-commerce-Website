import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Select } from '@chakra-ui/react';
import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';
import ProductCard from '../home-page/ProductCard/ProductCard';
import Pagination from '../../common/pagination/Pagination';
import { AppContext } from '../../../context';

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
  const { favorites } = useContext(AppContext);
  const isFavorite = favorites.map((el) => el.id);

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
      <div className="title-1 subcategory-title">{subcategory?.title}</div>
      {productsCount === 0 ? (
        <div className="no-items-text">
          În această categorie nu a fost găsit nici un produs.
        </div>
      ) : (
        <div className="subcategories-products-container">
          <div className="subcategories-filter">filtre</div>
          <div style={{ width: '100%' }}>
            <div className="filter-and-sorting">
              <div className="filter-mobile-container">
                <div className="filter-mobile">Filtre</div>
              </div>

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
            </div>
            <div className="cards-container">
              {products.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isFavorite={isFavorite}
                    small
                  />
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
      )}
    </div>
  );
}
