import { Route, Routes } from 'react-router-dom'
import ClassDetail from './Pages/ClassDetail'
import Home from './Pages/Home'
import Schedule from './Pages/Schedule'
import Search from './Pages/Search'
import SignUp from './Pages/SignUp'
import Welcome from './Pages/Welcome'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="home" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="my-schedule" element={<Schedule />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="class/:id" element={<ClassDetail />} />
      </Routes>
    </>
  )
}

export default App
