import React, { useEffect, useRef, useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toggleHeader } from '../../../utils';
import { AppContext } from '../../../context';
import Menu from '../menu/Menu';
import SearchBar from './SearchBar/SearchBar';
import LangSwitch from './LangSwitch/LangSwitch';
import Overlay from '../overlay/Overlay';

export default function Header(): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);
  const header = useRef(null);
  const router = useRouter();
  const { cart } = useContext(AppContext);
  const [renderCartLength, setRenderCartLength] = useState(false);

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
    <header className="header" suppressHydrationWarning={true}>
      {process.browser && (
        <>
          <div className="header-static">
            <div className="header-phone-number cursor-pointer">
              <div className="phone-icon-wrapper">
                <div className="header-phone-icon" />
              </div>
              <a className="header-phone" href="tel:+373 69 000 000">
                069 00 00 00
              </a>
            </div>
            <div className="header-links">
              <Link href="/regional-store" locale={router.locale}>
                Magazine regionale
              </Link>
              <Link href="/service" locale={router.locale}>
                Service centru
              </Link>
              <Link href="/news" locale={router.locale}>
                Știri
              </Link>
            </div>
          </div>
          <div
            id="header-relative"
            className={
              showMenu
                ? window && window.scrollY > 135
                  ? 'menu-is-opened header-fixed'
                  : 'menu-is-opened'
                : undefined
            }
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
                <span className="button-text">Catalogul produselor</span>
              </button>
              {showMenu && (
                <Overlay
                  anchor={header.current}
                  onBackdropClick={() => setShowMenu(false)}
                >
                  <Menu onClose={setShowMenu}></Menu>
                </Overlay>
              )}
              <SearchBar />
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
                      <div className="cart-notification">1</div>
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
  );
}
