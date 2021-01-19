import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Select,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useMediaQuery,
  DrawerHeader,
} from '@chakra-ui/react';
import Breadcrumbs from '../../common/breadcrumbs/Breadcrumbs';
import ProductCard from '../home-page/ProductCard/ProductCard';
import Pagination from '../../common/pagination/Pagination';
import { AppContext } from '../../../context';
import Filters from './Filters';

export default function Subcategories({
  products,
  subcategory,
  productsCount,
  currentPage,
  category,
}): JSX.Element {
  const [pagesCount, setPagesCount] = useState(1);
  const [sortOrder, setSortOrder] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const router = useRouter();
  const limit = 20;
  const { favorites, appContext } = useContext(AppContext);
  const favoritesIds = favorites.map((el) => el.id);
  const [isSmallerThan1250] = useMediaQuery('(max-width: 1250px');
  const [width, setWidth] = useState(0);

  const { dictionary } = appContext;

  useEffect(() => {
    setSortOrder(router.query.sort as any);

    setPagesCount(Math.ceil(productsCount / limit));
  }, [productsCount]);

  useEffect(() => {
    setWidth(window.innerWidth);
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

  const handleClose = () => {
    setShowFilter(false);
  };

  const handleOpen = () => {
    setShowFilter(true);
  };

  return (
    <div className="subcategories-page-wrapper">
      <Breadcrumbs path={path} />
      <div className="title-1 subcategory-title">{subcategory?.title}</div>
      {productsCount === 0 ? (
        <div className="no-items-text">{dictionary.noItemsText}</div>
      ) : (
        <div className="subcategories-products-container">
          <div className="subcategories-filter">
            {isSmallerThan1250 || width < 1250 ? (
              <Drawer
                isOpen={showFilter}
                placement="left"
                onClose={handleClose}
              >
                <DrawerOverlay>
                  <DrawerContent>
                    <DrawerHeader style={{ marginTop: 12 }}>
                      <DrawerCloseButton onClick={handleClose} />
                    </DrawerHeader>
                    <DrawerBody>
                      <div style={{ marginBottom: 50 }}>
                        <Filters
                          categoryId={subcategory.id}
                          handleClose={handleClose}
                        />
                      </div>
                    </DrawerBody>
                  </DrawerContent>
                </DrawerOverlay>
              </Drawer>
            ) : (
              <Filters categoryId={subcategory.id} handleClose={handleClose} />
            )}
          </div>
          <div style={{ width: '100%' }}>
            <div className="filter-and-sorting">
              <div className="filter-mobile-container" onClick={handleOpen}>
                <div className="filter-mobile">{dictionary.filters}</div>
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
                      {dictionary.sortBy}
                    </option>
                    <option value="cheap" className="sorting-option-text">
                      {dictionary.ascendingPrice}
                    </option>
                    <option value="expensive" className="sorting-option-text">
                      {dictionary.descendingPrice}
                    </option>
                    <option value="new" className="sorting-option-text">
                      {dictionary.newItems}
                    </option>
                    <option value="old" className="sorting-option-text">
                      {dictionary.oldItems}
                    </option>
                  </Select>
                </div>
              </div>
            </div>
            <div className="cards-container subcategory-wrapper">
              {products.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isFavorite={
                      favoritesIds.indexOf(product.id) === -1 ? false : true
                    }
                    small
                  />
                );
              })}
            </div>
            {products.length !== 0 ? (
              <Pagination
                paginationHandler={paginationHandler}
                pageCount={pagesCount}
                currentPage={currentPage}
                forcePage={+currentPage}
              />
            ) : (
              <div className="no-items-text">{dictionary.noFoundFilters}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
