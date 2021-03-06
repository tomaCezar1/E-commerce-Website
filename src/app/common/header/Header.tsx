import React, { useEffect, useRef, useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toggleHeader } from '../../../utils';
import { AppContext } from '../../../context';
import Menu from '../menu/Menu';
import SearchBar from './SearchBar/SearchBar';
import LangSwitch from './LangSwitch/LangSwitch';
import Overlay from '../overlay/Overlay';
import { Box } from '@chakra-ui/react';

export default function Header(): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);
  const header = useRef(null);
  const router = useRouter();
  const { cart, favorites, appContext } = useContext(AppContext);
  const [renderCartLength, setRenderCartLength] = useState(false);

  const { dictionary } = appContext;

  useEffect(() => {
    toggleHeader();
    /** @Mihai
     * Fix to prevent browser error "Warning: Expected server HTML to contain a matching <div> in <div>"
     * check more at: https://haodong.io/render-client-side-only-component-in-next-js
     * It cause by the fact that cart is stored in the localstorage and the SSR Dom differs from the Client side DOM
     * at first hydration.
     */
    setRenderCartLength(true);
  }, [showMenu]);

  const handleMenu = () => {
    setShowMenu(true);
  };

  return (
    <>
      <Box
        as="div"
        className="header-background-full"
        display={{ base: 'none', lg: 'flex' }}
      />
      {/*<div className="header"></div>*/}
      <header className="header" suppressHydrationWarning={true}>
        {process.browser && (
          <>
            <div className="header-static">
              <div className="ex-logo-wrapper">
                <Link href="/" locale={router.locale}>
                  <Box
                    display={{ base: 'none', lg: 'flex' }}
                    as="div"
                    className="extendend-logo cursor-pointer"
                  />
                </Link>

                <div className="addresses">
                  <span className="material-icons">location_on</span>
                  <span>mun. Chișinău, str. Petru Rareș, 43/1</span>
                </div>
              </div>

              <a className="header-phone" href="tel:+373 69 606 707">
                <div className="phone-icon-wrapper">
                  <div className="header-phone-icon" />
                </div>
                069 60 67 07
              </a>
              <div className={`header-links ${router.locale === 'ru' && 'ru'}`}>
                <Link href="/regional-store" locale={router.locale}>
                  <div className="link-body">
                    <span className="material-icons">store</span>
                    {dictionary.regionalStores}
                  </div>
                </Link>
                <Link href="/service" locale={router.locale}>
                  <div className="link-body">
                    <span className="material-icons">handyman</span>
                    {dictionary.serviceCenter}
                  </div>
                </Link>
                <Link href="/news" locale={router.locale}>
                  <div className="link-body">
                    <span className="material-icons">article</span>
                    {dictionary.news}
                  </div>
                </Link>
              </div>
            </div>
            <div
              id="header-relative"
              // className={
              //   showMenu
              //     ? window && window.scrollY > 135
              //       ? 'menu-is-opened header-fixed'
              //       : 'menu-is-opened'
              //     : undefined
              // }
              ref={header}
            >
              <Link href="/">
                <div className="logo-wrapper">
                  <div className="logo" />
                </div>
              </Link>
              <div className="header-clipped-part">
                <button className="header-menu" onClick={handleMenu}>
                  <div className="burger-icon" />
                  <span className="button-text">{dictionary.catalogue}</span>
                </button>
                {showMenu && (
                  <Overlay
                    anchor={header.current}
                    onBackdropClick={() => setShowMenu(false)}
                  >
                    <Menu onClose={setShowMenu}></Menu>
                  </Overlay>
                )}
                <SearchBar onClose={() => {}} />
                <div className="header-cart-section">
                  <div className="icons-wrapper">
                    <Link href="/cart" locale={router.locale}>
                      <div className="header-cart-icon">
                        {renderCartLength && cart.length ? (
                          <div className="cart-notification">{cart.length}</div>
                        ) : null}
                      </div>
                    </Link>
                    <Link href="/favorites" locale={router.locale}>
                      <div className="header-favorites-icon">
                        {favorites.length ? (
                          <div className="cart-notification">
                            {favorites.length}
                          </div>
                        ) : null}
                      </div>
                    </Link>
                  </div>
                  <LangSwitch />
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
