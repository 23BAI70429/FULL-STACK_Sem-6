import { useSelector } from "react-redux"
import { useMemo } from "react"

const Pricing = () => {

  const tasks = useSelector(state => state.tasks.tasks)

  const completed = useMemo(() => {
    return tasks.filter(t => t.completed).length
  }, [tasks])

  const progress = useMemo(() => {
    if (tasks.length === 0) return 0
    return Math.round((completed / tasks.length) * 100)
  }, [completed, tasks])

  return (

    <div>

      <h2>Student Progress Report</h2>

      <h4>Total Tasks: {tasks.length}</h4>

      <h4>Completed: {completed}</h4>

      <h4>Completion %: {progress}%</h4>

    </div>

  )
}

export default Pricing