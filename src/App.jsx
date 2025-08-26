import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router basename="/portfolio">
      <div className="min-h-screen bg-dark text-gold">
        <nav className="p-4 flex justify-between border-b border-gold">
          <h2 className="text-2xl font-bold"><a href="https://www.linkedin.com/in/wspinks"><img src="./linkedin_icon.png" alt="linkedin" width="20" height="20"></img>wspinks</a></h2>
          <div className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
