import React, { createContext, useState } from 'react'
import {
  getCart,
  saveCart,
} from "../utils"

const AppContext = createContext(null)

const AppContextProvider = ({ children, initialState }) => {
  const [appContext, setAppContext] = useState(initialState)

  const [cart, setCart] = useState(getCart())

  const updateCart = updatedCart => {
    setCart(updatedCart)
    saveCart(updatedCart)
  }

  const addToCart = (product, qty = 1) => {
    const copy = [...cart]

    // If the product is already in cart
    const indexOfProduct = copy.findIndex(
      alreadyInCart => alreadyInCart.id === product.id
    )

    if (indexOfProduct !== -1) {
      //Update the quantity
      copy[indexOfProduct].qty += parseInt(qty)

      if (copy[indexOfProduct].qty === 0) {
        // Remove the product from the cart
        copy.splice(indexOfProduct, 1)
      }
    } else {
      // Set the quantity to 1
      product.qty = parseInt(qty)

      //Push the product
      copy.push(product)
    }

    updateCart(copy)
  }

  const removeFromCart = product => {
    const copy = [...cart]
    const newCart = copy.filter(
      alreadyInCart => alreadyInCart.id !== product.id
    )
    updateCart(newCart)
  }

  const clearCart = () => {
    const updatedCart = []
    updateCart(updatedCart)
  }

  return (
    <AppContext.Provider value={{ appContext, setAppContext, cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }
