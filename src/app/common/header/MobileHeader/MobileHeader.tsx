import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../../context';
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
  const { cart, favorites, appContext } = useContext(AppContext);
  const [rootCategories, setRootCategories] = useState([]);
  const [childCategories, setChildCategories] = useState([]);

  useEffect(() => {
    const rooCats = appContext.categories.filter((c) => !c.parent);
    setRootCategories(rooCats);
    setChildCategories(
      appContext.categories.filter((c) => c.parent === rooCats[0].id)
    );
  }, [appContext]);

  const onClose = () => {
    setIsOpen(false);
  };

  const router = useRouter();

  return (
    <div className="mobile-header-container">
      <div className="mobile-icons-wrapper">
        <div className="mobile-burger-icon" onClick={() => setIsOpen(true)} />
        <div className="mobile-search-icon" />
      </div>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <div>
            <DrawerContent>
              <DrawerCloseButton onClick={onClose} />
              <DrawerHeader>
                <div className="drawer-logo" />
              </DrawerHeader>
              <DrawerBody>
                <div style={{ marginTop: 30 }}>
                  <Accordion allowMultiple allowToggle>
                    {rootCategories.map((parentCat) => {
                      return (
                        <AccordionItem key={parentCat.id}>
                          <AccordionButton>
                            <Box flex="1" textAlign="left">
                              <div className="mobile-menu-item">
                                {parentCat.title}
                              </div>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel pb={4}>
                            {appContext.categories
                              .filter((c) => c.parent === parentCat.id)
                              .map((child) => {
                                return (
                                  <div
                                    key={child.id}
                                    className="mobile-menu-child-item"
                                  >
                                    {child.title}
                                  </div>
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
                      <span className="mobile-header-link">
                        Magazine regionale
                      </span>
                    </Link>
                    <Link href="/service" locale={router.locale}>
                      <span className="mobile-header-link">Service Centru</span>
                    </Link>
                    <Link href="/news" locale={router.locale}>
                      <span className="mobile-header-link">Știri</span>
                    </Link>
                  </div>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </div>
        </DrawerOverlay>
      </Drawer>
      <Link href="/">
        <div className="mobile-logo-wrapper">
          <div className="mobile-logo" />
        </div>
      </Link>
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
