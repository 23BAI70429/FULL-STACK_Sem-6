import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className="fw-bold text-light">
          College Management
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-light fw-semibold">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/departments" className="text-light fw-semibold">
              Departments
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
