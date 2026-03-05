import { createContext, useState } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

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
    <AppContext.Provider value={{
      theme,
      toggleTheme,
      user,
      toggleLogin
    }}>
      {children}
    </AppContext.Provider>
  )
}