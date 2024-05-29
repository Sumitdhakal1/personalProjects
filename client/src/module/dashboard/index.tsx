
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar"
import Contact from "./components/Contact"
import Project from './components/Projects'
import Home from './components/Home';
const index = () => {
  return (
    <Router>
    <div className="grid grid-cols-[10px_1fr_1fr] h-screen md:gap-[2rem]">
      <Sidebar />
      <div className="flex-grow ">
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </div>
  </Router>
  )
}

export default index