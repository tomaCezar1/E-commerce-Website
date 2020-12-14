import React, { createContext, useState } from 'react'

const AppContext = createContext(null)

const AppContextProvider = ({ children, initialState }) => {
  const [appContext, setAppContext] = useState(initialState)
  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }
