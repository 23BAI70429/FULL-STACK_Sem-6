import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import ThemeToggle from "./ThemeToggle"

const NavigationBar = () => {

  const { theme, user, toggleLogin } = useContext(AppContext)

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">

      <Container>

        <Navbar.Brand as={Link} to="/">
          College Management
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>

          <Nav className="ms-auto align-items-center">

            <Nav.Link as={Link} to="/">Home</Nav.Link>

            <Nav.Link as={Link} to="/departments">
              Departments
            </Nav.Link>

            <Nav.Link as={Link} to="/analytics">
              Analytics
            </Nav.Link>

            <Nav.Link as={Link} to="/reports">
              Reports
            </Nav.Link>

            <Nav.Link as={Link} to="/pricing">
              Pricing
            </Nav.Link>

            <ThemeToggle />

            <span className="ms-3 text-light">
              👤 {user.name} ({user.role})
            </span>

            <Button
              variant="outline-warning"
              size="sm"
              className="ms-3"
              onClick={toggleLogin}
            >
              Logout
            </Button>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  )
}

export default NavigationBar