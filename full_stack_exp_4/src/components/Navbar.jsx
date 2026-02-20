import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import ThemeToggle from "./ThemeToggle"

const NavigationBar = () => {

  const { theme, user, toggleLogin } = useContext(AppContext)

  return (
    <Navbar
      expand="lg"
      fixed="top"
      bg={theme === "light" ? "dark" : "light"}
      variant={theme === "light" ? "dark" : "light"}
    >
      <Container>

        <Navbar.Brand as={Link} to="/" className="fw-bold">
          College Management
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">

            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/departments">
              Departments
            </Nav.Link>

            <Nav.Link as={Link} to="/analytics">
              Analytics
            </Nav.Link>

            <Nav.Link as={Link} to="/reports">
              Reports
            </Nav.Link>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Info */}
            {user.loggedIn && (
              <span
                className={`ms-3 fw-bold ${
                  theme === "light" ? "text-light" : "text-dark"
                }`}
              >
                👤 {user.name} ({user.role})
              </span>
            )}

            {/* Login / Logout */}
            <Button
              variant="outline-warning"
              size="sm"
              className="ms-3"
              onClick={toggleLogin}
            >
              {user.loggedIn ? "Logout" : "Login"}
            </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar