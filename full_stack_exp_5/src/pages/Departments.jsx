import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaLaptopCode, FaMicrochip, FaCogs } from 'react-icons/fa'

const Departments = () => {
  return (
    <div className="app-wrapper">
      <Navbar />

      <div className="page-content">

        {/* Top Section */}
        <div className="dept-hero text-center">
          <h1>Our Departments</h1>
          <p>Explore the academic divisions that power innovation and excellence.</p>
        </div>

        {/* Cards Section */}
        <Container className="my-5">
          <Row className="g-4">

            <Col md={4}>
              <Card className="dept-card text-center">
                <div className="dept-icon text-primary">
                  <FaLaptopCode size={40} />
                </div>
                <Card.Body>
                  <Card.Title>Computer Science</Card.Title>
                  <Card.Text>
                    Focused on AI, ML, Data Science, and Software Development.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="dept-card text-center">
                <div className="dept-icon text-success">
                  <FaMicrochip size={40} />
                </div>
                <Card.Body>
                  <Card.Title>Electronics</Card.Title>
                  <Card.Text>
                    Covers embedded systems, robotics, and communication systems.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="dept-card text-center">
                <div className="dept-icon text-danger">
                  <FaCogs size={40} />
                </div>
                <Card.Body>
                  <Card.Title>Mechanical</Card.Title>
                  <Card.Text>
                    Specializes in manufacturing, thermodynamics, and design.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>

      </div>

      <Footer />
    </div>
  )
}

export default Departments
