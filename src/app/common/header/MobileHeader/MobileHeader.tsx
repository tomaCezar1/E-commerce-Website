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

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const { cart, favorites, appContext } = useContext(AppContext);
  const [rootCategories, setRootCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const rooCats = appContext.categories.filter((c) => !c.parent);
    setRootCategories(rooCats);
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
    setShowSearchBar(!showSearchBar);
    setShowLogo(!showLogo);
  };

  return (
    <div className="mobile-header-container">
      <div className="mobile-icons-wrapper">
        <div className="mobile-icon-wrap" onClick={() => setIsOpen(true)}>
          <div className="mobile-burger-icon" />
        </div>
        <div className="mobile-search-wrapper">
          {showSearchBar && !showLogo ? (
            <SearchBar mobile onClose={handleClick} withTimeout />
          ) : (
            <div
              className={
                !showLogo ? 'mobile-search-icon-expanded' : 'mobile-search-icon'
              }
              onClick={() => {
                setShowLogo(!showLogo);
                setTimeout(() => {
                  setShowSearchBar(true);
                }, 600);
              }}
            />
          )}
        </div>
      </div>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <div>
            <DrawerContent>
              <DrawerCloseButton onClick={onClose} />
              <DrawerHeader>
                <Link href="/">
                  <div className="drawer-logo" />
                </Link>
              </DrawerHeader>
              <DrawerBody>
                <div style={{ marginTop: 30 }}>
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
                        Magazine regionale
                      </div>
                    </Link>
                    <Link href="/service" locale={router.locale}>
                      <div className="mobile-header-link">Service Centru</div>
                    </Link>
                    <Link href="/news" locale={router.locale}>
                      <div className="mobile-header-link">Știri</div>
                    </Link>
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
      <div className="mobile-icons-wrapper">
        <Link href="/cart" locale={router.locale}>
          <div className="mobile-cart-icon">
            {cart.length ? (
              <div className="mobile-notification-icon">{cart.length}</div>
            ) : null}
          </div>
        </Link>
        <Link href="/favorites" locale={router.locale}>
          <div className="mobile-heart-icon">
            {favorites.length ? (
              <div className="mobile-notification-icon">{favorites.length}</div>
            ) : null}
          </div>
        </Link>
      </div>
    </div>
  );
}
