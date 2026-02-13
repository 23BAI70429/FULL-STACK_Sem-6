import { Card } from 'react-bootstrap';
import { FaUserGraduate, FaChalkboardTeacher, FaBook } from 'react-icons/fa';

const icons = {
  student: <FaUserGraduate color="#2563eb" />,
  faculty: <FaChalkboardTeacher color="#7c3aed" />,
  course: <FaBook color="#ec4899" />
};

const CardComponent = ({ title, text, type }) => {
  return (
    <Card className="custom-card text-center mb-4">
      <div className="card-icon">{icons[type]}</div>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
    </Card>
  );
};

export default CardComponent;
