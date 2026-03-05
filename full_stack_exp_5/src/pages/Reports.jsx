import { useSelector } from "react-redux"
import { useMemo, useContext } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { AppContext } from "../context/AppContext"

const Reports = () => {

  const { user } = useContext(AppContext)

  const tasks = useSelector((state) => state.tasks.tasks)

  // useMemo calculations
  const totalTasks = useMemo(() => tasks.length, [tasks])

  const completedTasks = useMemo(() => {
    return tasks.filter((t) => t.completed).length
  }, [tasks])

  const pendingTasks = useMemo(() => {
    return tasks.filter((t) => !t.completed).length
  }, [tasks])

  const completionRate = useMemo(() => {
    if (tasks.length === 0) return 0
    return Math.round((completedTasks / tasks.length) * 100)
  }, [completedTasks, tasks])

  return (
    <div className="app-wrapper">

      <Navbar />

      <div className="page-content">

        <Container className="my-5">

          <h2 className="text-center mb-4">
            Student Task Report
          </h2>

          <h5 className="text-center mb-5">
            Student: {user.name}
          </h5>

          <Row>

            <Col md={3}>
              <Card className="text-center shadow">
                <Card.Body>
                  <h6>Total Tasks</h6>
                  <h3>{totalTasks}</h3>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center shadow">
                <Card.Body>
                  <h6>Completed</h6>
                  <h3>{completedTasks}</h3>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center shadow">
                <Card.Body>
                  <h6>Pending</h6>
                  <h3>{pendingTasks}</h3>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center shadow">
                <Card.Body>
                  <h6>Completion %</h6>
                  <h3>{completionRate}%</h3>
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