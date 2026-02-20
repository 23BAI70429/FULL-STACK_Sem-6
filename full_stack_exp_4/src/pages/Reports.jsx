import { useContext, useMemo } from "react"
import { AppContext } from "../context/AppContext"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Container, Card, Row, Col } from "react-bootstrap"

const Reports = () => {

  const { state, user } = useContext(AppContext)

  // 🔥 useMemo for report calculations
  const totalTasks = useMemo(() => state.tasks.length, [state.tasks])

  const completedTasks = useMemo(() => {
    return state.tasks.filter(task => task.completed).length
  }, [state.tasks])

  const activeTasks = useMemo(() => {
    return state.tasks.filter(task => !task.completed).length
  }, [state.tasks])

  const completionRate = useMemo(() => {
    if (totalTasks === 0) return 0
    return Math.round((completedTasks / totalTasks) * 100)
  }, [completedTasks, totalTasks])

  return (
    <div className="app-wrapper">
      <Navbar />

      <div className="page-content">
        <Container className="my-5">

          <h2 className="text-center mb-4">Student Performance Report</h2>

          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h5>Student Profile</h5>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Role:</strong> {user.role}</p>
            </Card.Body>
          </Card>

          <Row>
            <Col md={3}>
              <Card className="text-center shadow-sm">
                <Card.Body>
                  <h6>Total Tasks</h6>
                  <h4>{totalTasks}</h4>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center shadow-sm">
                <Card.Body>
                  <h6>Active Tasks</h6>
                  <h4>{activeTasks}</h4>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center shadow-sm">
                <Card.Body>
                  <h6>Completed Tasks</h6>
                  <h4>{completedTasks}</h4>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center shadow-sm">
                <Card.Body>
                  <h6>Completion Rate</h6>
                  <h4>{completionRate}%</h4>
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

export default Reports