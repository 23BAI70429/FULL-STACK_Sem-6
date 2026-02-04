import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className="fw-bold text-light">
          College Management
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-light fw-semibold" href="#">
              Home
            </Nav.Link>
            <Nav.Link className="text-light fw-semibold" href="#">
              Departments
            </Nav.Link>
            <Nav.Link className="text-light fw-semibold" href="#">
              Admissions
            </Nav.Link>
            <Nav.Link className="text-light fw-semibold" href="#">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
