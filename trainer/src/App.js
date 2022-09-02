import { Route, Routes } from 'react-router-dom'
import ClassDetail from './Pages/ClassDetail'
import Home from './Pages/Home'
import Schedule from './Pages/Schedule'
import Search from './Pages/Search'
import Welcome from './Pages/Welcome'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="home" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="schedule/:id" element={<ClassDetail />} />
      </Routes>
    </div>
  )
}

export default App
