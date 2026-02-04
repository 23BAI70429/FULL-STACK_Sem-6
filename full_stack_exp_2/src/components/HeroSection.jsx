import { Container, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container>
        <h1>College Management System</h1>
        <p>
          A modern platform to manage students, faculty, and academic processes.
        </p>
        <Button className="hero-btn">Explore Now</Button>
      </Container>
    </div>
  );
};

export default HeroSection;
