import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {toggleHeader} from '../../../utils'
import Menu from '../menu/Menu'
import SearchBar from './SearchBar/SearchBar'
import LangSwitch from './LangSwitch/LangSwitch'
import Overlay from '../overlay/Overlay'

export default function Header(): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    toggleHeader()
  }, [])

  const [showMenu, setShowMenu] = useState(false);
  const header = useRef(null);

  const handleMenu = () => {
    setShowMenu(true);
    // const menu = document.getElementById('menu')
    // // Decide if add or remove
    // if(menu.classList.contains('hide-menu')) {
    //   // Remove
    //   menu.classList.remove('hide-menu')
    // } else {
    //   // Add
    //   menu.classList.add('hide-menu')
    // }

  }

  return (
    <header className="header">
      <div className="header-static">
          <div className="header-phone-number cursor-pointer" >
            <div className="phone-icon-wrapper">
              <div className="header-phone-icon" />
            </div>
            <a className="header-phone" href="tel:+373 69 000 000">
              069 00 00 00
            </a>
          </div>
          <div className="header-links">
            <Link href={`/${router.locale}/regional-store`}>
              Magazine regionale
            </Link>
            <Link href={`/${router.locale}/service`}>
              Service centru
            </Link>
            <Link href={`/${router.locale}/news`}>
              Știri
            </Link>
          </div>
      </div>
      <div id="header-relative" ref={header}>
        <Link href={`/`}>
          <div className="logo-wrapper">
            <div className="logo" />
          </div>
        </Link>
        <button className="header-menu" onClick={handleMenu}>
          <div className="burger-icon"/>
          <span className="button-text">Catalogul produselor {showMenu}</span>
        </button>
        {showMenu && (
          <Overlay anchor={header.current} onBackdropClick={() => setShowMenu(false)}>
            <Menu></Menu>
          </Overlay>
        )}
        {/*<Menu />*/}
        <SearchBar />
        <div className="header-cart-section">
          <div className="icons-wrapper">
            <Link href={`/${router.locale}/cart`}>
              <div className="header-cart-icon">
                <div className="cart-notification">1</div>
              </div>
            </Link>
            <Link href={`/${router.locale}/favorites`}>
              <div className="header-favorites-icon">
                <div className="cart-notification">1</div>
              </div>
            </Link>
          </div>
          <LangSwitch />
        </div>
      </div>

    </header>
  )
}
