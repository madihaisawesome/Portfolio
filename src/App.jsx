import "./Style/Style.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import About from "./Pages/About/About";
import Experience from "./Pages/Experience/Experience";
import Portfolio from "./Pages/Portfolio/Portfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* Contact page temporarily hidden — redirect to home */}
        <Route path="/contact" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
