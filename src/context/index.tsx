import React, { createContext, useState } from 'react';
import { getCart, saveCart, getFavorites, saveFavorites } from '../utils';

const AppContext = createContext(null);

const AppContextProvider = ({ children, initialState }) => {
  const [appContext, setAppContext] = useState(initialState);
  const [cart, setCart] = useState(getCart());
  const [favorites, setFavorites] = useState(getFavorites());

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    saveCart(updatedCart);
  };

  const addToCart = (product, qty: any = 1) => {
    const copy = [...cart];

    // If the product is already in cart
    const indexOfProduct = copy.findIndex(
      (alreadyInCart) => alreadyInCart.id === product.id
    );

    if (indexOfProduct !== -1) {
      //Update the quantity
      copy[indexOfProduct].qty += parseInt(qty);

      if (copy[indexOfProduct].qty < 2) {
        product.qty = 1;
      }
    } else {
      // Set the quantity to 1
      product.qty = parseInt(qty);

      //Push the product
      copy.push(product);
    }

    updateCart(copy);
  };

  const removeFromCart = (product) => {
    const copy = [...cart];
    const newCart = copy.filter(
      (alreadyInCart) => alreadyInCart.id !== product.id
    );
    updateCart(newCart);
  };

  const clearCart = () => {
    const updatedCart = [];
    updateCart(updatedCart);
  };

  const updateFavorites = (updatedFavorites) => {
    setFavorites(updatedFavorites);
    saveFavorites(updatedFavorites);
  };

  const addToFavorites = (product) => {
    const copy = [...favorites];

    // If the product is already in fav
    const indexOfProduct = copy.findIndex(
      (alreadyInFav) => alreadyInFav.id === product.id
    );

    if (indexOfProduct === -1) {
      copy.push(product);
    }

    if (indexOfProduct !== -1) {
      copy.splice(indexOfProduct, 1);
    }

    updateFavorites(copy);
  };

  return (
    <AppContext.Provider
      value={{
        appContext,
        setAppContext,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        favorites,
        addToFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
