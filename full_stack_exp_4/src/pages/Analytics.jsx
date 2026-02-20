import { useContext, useState, useMemo } from "react"
import { AppContext } from "../context/AppContext"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Container, Button, Form, ListGroup, Row, Col, Card } from "react-bootstrap"

const Analytics = () => {

  const { state, dispatch, user } = useContext(AppContext)

  const [taskInput, setTaskInput] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const addTask = () => {
    if (!taskInput.trim() || !user.loggedIn) return

    dispatch({
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        title: taskInput,
        completed: false
      }
    })

    setTaskInput("")
  }

  // 🔥 Filter + Search (useMemo optimized)
  const filteredTasks = useMemo(() => {
    let tasks = state.tasks

    // Filter
    if (state.filter === "completed") {
      tasks = tasks.filter(task => task.completed)
    } else if (state.filter === "active") {
      tasks = tasks.filter(task => !task.completed)
    }

    // Search
    if (searchTerm.trim() !== "") {
      tasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    return tasks
  }, [state.tasks, state.filter, searchTerm])

  // 🔥 Derived Analytics (useMemo)
  const totalTasks = useMemo(() => state.tasks.length, [state.tasks])

  const completedCount = useMemo(() => {
    return state.tasks.filter(task => task.completed).length
  }, [state.tasks])

  const activeCount = useMemo(() => {
    return state.tasks.filter(task => !task.completed).length
  }, [state.tasks])

  const completionPercentage = useMemo(() => {
    if (totalTasks === 0) return 0
    return Math.round((completedCount / totalTasks) * 100)
  }, [completedCount, totalTasks])

  return (
    <div className="app-wrapper">
      <Navbar />

      <div className="page-content">
        <Container className="my-5">

          <h2 className="text-center mb-4">
            Task Analytics Dashboard
          </h2>

          {user.loggedIn ? (
            <h5 className="mb-3 text-success">
              Welcome {user.name}! Manage your tasks.
            </h5>
          ) : (
            <h5 className="mb-3 text-danger">
              Please login to manage tasks.
            </h5>
          )}

          {/* Add Task */}
          <Form className="d-flex mb-3">
            <Form.Control
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="Enter task..."
              disabled={!user.loggedIn}
            />
            <Button
              className="ms-2"
              onClick={addTask}
              disabled={!user.loggedIn}
            >
              Add
            </Button>
          </Form>

          {/* Search */}
          <Form.Control
            type="text"
            placeholder="Search tasks..."
            className="mb-3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Filter Buttons */}
          <div className="mb-3">
            <Button
              variant="outline-primary"
              className="me-2"
              onClick={() =>
                dispatch({ type: "SET_FILTER", payload: "all" })
              }
            >
              All
            </Button>

            <Button
              variant="outline-success"
              className="me-2"
              onClick={() =>
                dispatch({ type: "SET_FILTER", payload: "active" })
              }
            >
              Active
            </Button>

            <Button
              variant="outline-warning"
              onClick={() =>
                dispatch({ type: "SET_FILTER", payload: "completed" })
              }
            >
              Completed
            </Button>
          </div>

          {/* Task List */}
          <ListGroup className="mb-4">
            {filteredTasks.length === 0 && (
              <ListGroup.Item>No tasks found.</ListGroup.Item>
            )}

            {filteredTasks.map(task => (
              <ListGroup.Item
                key={task.id}
                className="d-flex justify-content-between align-items-center"
              >
                <div
                  style={{
                    textDecoration: task.completed
                      ? "line-through"
                      : "none",
                    cursor: "pointer",
                    flex: 1
                  }}
                  onClick={() =>
                    dispatch({
                      type: "TOGGLE_TASK",
                      payload: task.id
                    })
                  }
                >
                  {task.title}
                </div>

                <Button
                  variant="danger"
                  size="sm"
                  onClick={() =>
                    dispatch({
                      type: "DELETE_TASK",
                      payload: task.id
                    })
                  }
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>

          {/* Analytics Summary Cards */}
          <Row>
            <Col md={3}>
              <Card className="text-center shadow-sm">
                <Card.Body>
                  <h6>Total</h6>
                  <h4>{totalTasks}</h4>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center shadow-sm">
                <Card.Body>
                  <h6>Active</h6>
                  <h4>{activeCount}</h4>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center shadow-sm">
                <Card.Body>
                  <h6>Completed</h6>
                  <h4>{completedCount}</h4>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center shadow-sm">
                <Card.Body>
                  <h6>Completion %</h6>
                  <h4>{completionPercentage}%</h4>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Button
            variant="danger"
            className="mt-4"
            onClick={() =>
              dispatch({ type: "CLEAR_COMPLETED" })
            }
          >
            Clear Completed
          </Button>

        </Container>
      </div>

      <Footer />
    </div>
  )
}

export default Analytics