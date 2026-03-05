import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { Button } from "react-bootstrap"

const ThemeToggle = () => {

  const { theme, toggleTheme } = useContext(AppContext)

  return (
    <Button
      variant={theme === "light" ? "dark" : "light"}
      onClick={toggleTheme}
      className="ms-3"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </Button>
  )
}

export default ThemeToggle