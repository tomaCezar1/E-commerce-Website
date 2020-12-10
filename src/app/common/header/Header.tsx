import { useState, useEffect } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {toggleHeader, toggleMenu} from '../../../utils/toggleHeader'
import Menu from '../menu/Menu'
import LangSwitch from './LangSwitch/LangSwitch'

export default function Header(): JSX.Element {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')
  
  useEffect(() => {
    toggleHeader()
    toggleMenu()
  }, [])

  const handleMenu = () => {
    // Decide if add or remove
    const menu = document.getElementById('menu')
    if(menu.classList.contains('hide-menu')) {
      // Remove
      menu.classList.remove('hide-menu')
    } else {
      // Add
      menu.classList.add('hide-menu')
    }
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
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
      <div id="header-relative">
        <Link href={`/`}>
          <div className="logo-wrapper">
            <div className="logo" />
          </div>
        </Link>
        <button className="header-menu" onClick={handleMenu}>
          <div className="burger-icon"/>
          <span className="button-text">Catalogul produselor</span>
        </button>
        <Menu />
        <div className="search-container">
          <form onSubmit={handleSubmit}>
            <div style={{ margin: "0 auto" }}>
              <div className="search-icon" />
              <input
                id="Search"
                placeholder="Search..."
                value={searchValue}
                onChange={handleChange}
                className="search-bar"
              />
            </div>
          </form>
        </div>
        <div className="header-cart-section">
          <div className="icons-wrapper">
            <Link href={`/${router.locale}/cart`}>
              <div className="header-cart-icon">
                <div className="cart-notification">1</div>
              </div>
            </Link>
            <Link href={`/${router.locale}/favorites`}>
              <div className="header-favorites-icon" />
            </Link>
          </div>
          <LangSwitch />
        </div>
      </div>
      
    </header>
  )
}
