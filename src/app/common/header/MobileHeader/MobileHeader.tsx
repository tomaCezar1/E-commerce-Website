import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../../context';
import SearchBar from '../SearchBar/SearchBar';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import LangSwitch from '../LangSwitch/LangSwitch';

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const { cart, favorites, appContext } = useContext(AppContext);
  const [renderedFavorites, setRenderedFavorites] = useState(false);
  const [rootCategories, setRootCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const router = useRouter();
  const { dictionary } = appContext;

  useEffect(() => {
    const rooCats = appContext.categories.filter((c) => !c.parent);
    setRootCategories(rooCats);
    setRenderedFavorites(true);
  }, [appContext]);

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [router.asPath]);

  const onClose = () => {
    setIsOpen(false);
  };

  const handleChange = (activeIndex) => {
    setActiveCategory(activeIndex);
  };

  const handleClick = () => {
    setShowSearchBar(false);
    setTimeout(() => {
      setShowLogo(!showLogo);
    }, 100);
  };

  return (
    <div className="mobile-header-container" suppressHydrationWarning={true}>
      <div className="mobile-icons-wrapper">
        <div className="mobile-icon-wrap" onClick={() => setIsOpen(true)}>
          <div className="mobile-burger-icon" />
        </div>
        <div
          className="mobile-search-wrapper"
          onClick={() => {
            setShowLogo(!showLogo);
            setTimeout(() => {
              setShowSearchBar(true);
              document.getElementById('Search').focus();
            }, 300);
          }}
        >
          {showSearchBar && <SearchBar mobile onClose={handleClick} />}
          {!showSearchBar && (
            <div
              className={
                !showLogo ? 'mobile-search-icon-expanded' : 'mobile-search-icon'
              }
            />
          )}
        </div>
      </div>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <div>
            <DrawerContent>
              <DrawerCloseButton onClick={onClose} />
              <DrawerHeader style={{ paddingTop: 50 }}>
                <Link href="/">
                  <div className="drawer-logo" />
                </Link>
              </DrawerHeader>
              <DrawerBody>
                <div style={{ marginBottom: 50 }}>
                  <Accordion
                    allowMultiple
                    allowToggle
                    index={activeCategory}
                    onChange={handleChange}
                  >
                    {rootCategories.map((parentCat) => {
                      return (
                        <AccordionItem key={parentCat.id}>
                          <AccordionButton>
                            <Box flex="1" textAlign="left">
                              <Link
                                href={'/categories/[categorySlug]'}
                                as={`/categories/${parentCat.slug}`}
                                locale={router.locale}
                                key={parentCat.id}
                              >
                                <div className="mobile-menu-item">
                                  {parentCat.title}
                                </div>
                              </Link>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel pb={4}>
                            {appContext.categories
                              .filter((c) => c.parent === parentCat.id)
                              .map((child) => {
                                return (
                                  <Link
                                    href={
                                      '/categories/[categorySlug]/[subcategorySlug]'
                                    }
                                    as={`/categories/${rootCategories[activeCategory]?.slug}/${child.slug}`}
                                    locale={router.locale}
                                    key={child.id}
                                  >
                                    <div
                                      key={child.id}
                                      className="mobile-menu-child-item"
                                    >
                                      {child.title}
                                    </div>
                                  </Link>
                                );
                              })}
                          </AccordionPanel>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </div>
              </DrawerBody>

              <div className="drawer-footer-wrapper">
                <DrawerFooter>
                  <div className="mobile-drawer-footer">
                    <Link href="/regional-store" locale={router.locale}>
                      <div className="mobile-header-link">
                        {dictionary.regionalStores}
                      </div>
                    </Link>
                    <Link href="/service" locale={router.locale}>
                      <div className="mobile-header-link">
                        {dictionary.serviceCenter}
                      </div>
                    </Link>
                    <Link href="/news" locale={router.locale}>
                      <div className="mobile-header-link">
                        {dictionary.news}
                      </div>
                    </Link>
                    <div style={{ margin: '10px 0' }}>
                      <LangSwitch />
                    </div>
                  </div>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </div>
        </DrawerOverlay>
      </Drawer>
      {showLogo && (
        <Link href="/">
          <div className="mobile-logo-wrapper">
            <div className="mobile-logo" />
          </div>
        </Link>
      )}
      {renderedFavorites && (
        <div className="mobile-icons-wrapper">
          <Link href="/cart" locale={router.locale}>
            <div className="mobile-cart-wrapper">
              <div className="mobile-cart-icon">
                {cart.length ? (
                  <div className="mobile-notification-icon">{cart.length}</div>
                ) : null}
              </div>
            </div>
          </Link>
          <Link href="/favorites" locale={router.locale}>
            <div className="mobile-favorites-wrapper">
              <div className="mobile-heart-icon">
                {favorites.length ? (
                  <div className="mobile-notification-icon">
                    {favorites.length}
                  </div>
                ) : null}
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
