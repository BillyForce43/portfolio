// import './App.css'
import Navbar from './components/navbar'
import About from './pages/About';
import Resume from './pages/Resume';
import Project from './pages/Project';
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Resume />} />
      </Routes>
    </Router>
  )
}

export default App
