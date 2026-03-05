import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CardComponent from '../components/CardComponent';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />

      <Container className="my-5">
        <Row>
          <Col md={4}>
            <CardComponent
              type="student"
              title="Student Management"
              text="Manage student data, attendance, and academic records efficiently."
            />
          </Col>

          <Col md={4}>
            <CardComponent
              type="faculty"
              title="Faculty Management"
              text="Organize faculty details, departments, and schedules."
            />
          </Col>

          <Col md={4}>
            <CardComponent
              type="course"
              title="Course Management"
              text="Handle courses, syllabus, and academic planning seamlessly."
            />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
