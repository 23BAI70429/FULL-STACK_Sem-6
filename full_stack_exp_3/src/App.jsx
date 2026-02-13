import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Departments from './pages/Departments'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/departments" element={<Departments />} />
    </Routes>
  )
}

export default App
