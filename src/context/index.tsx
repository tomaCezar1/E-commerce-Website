import React, { createContext, useState } from 'react'

const AppContext = createContext(null)

const AppContextProvider = ({ children }) => {
  const [appContext, setAppContext] = useState({
    categories: [],
  })
  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }
