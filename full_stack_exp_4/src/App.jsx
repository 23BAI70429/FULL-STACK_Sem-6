import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Departments from './pages/Departments'
import Analytics from './pages/Analytics'
import Reports from './pages/Reports'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  )
}

export default App