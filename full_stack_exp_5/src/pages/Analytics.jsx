import { useState, useMemo } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTask, toggleTask, deleteTask } from "../redux/slices/taskSlice"

const Analytics = () => {

  const tasks = useSelector(state => state.tasks.tasks)
  const dispatch = useDispatch()

  const [taskInput, setTaskInput] = useState("")

  const completedTasks = useMemo(() => {
    return tasks.filter(t => t.completed).length
  }, [tasks])

  const addNewTask = () => {
    if (!taskInput.trim()) return
    dispatch(addTask(taskInput))
    setTaskInput("")
  }

  return (
    <div>

      <h2>Task Analytics</h2>

      <input
        value={taskInput}
        onChange={e => setTaskInput(e.target.value)}
      />

      <button onClick={addNewTask}>
        Add
      </button>

      <ul>
        {tasks.map(task => (

          <li key={task.id}>

            <span
              onClick={() => dispatch(toggleTask(task.id))}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {task.title}
            </span>

            <button
              onClick={() => dispatch(deleteTask(task.id))}
            >
              Delete
            </button>

          </li>

        ))}
      </ul>

      <h4>Total Tasks: {tasks.length}</h4>
      <h4>Completed Tasks: {completedTasks}</h4>

    </div>
  )
}

export default Analytics