import { createContext, useReducer, useState } from "react"
import { appReducer, initialState } from "../reducer/appReducer"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(appReducer, initialState)

  const [theme, setTheme] = useState("light")

  const [user, setUser] = useState({
    name: "Surya",
    role: "Student",
    loggedIn: true
  })

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light")
  }

  const toggleLogin = () => {
    setUser(prev => ({
      ...prev,
      loggedIn: !prev.loggedIn
    }))
  }

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        theme,
        toggleTheme,
        user,
        toggleLogin
      }}
    >
      {children}
    </AppContext.Provider>
  )
}