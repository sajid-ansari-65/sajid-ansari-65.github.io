import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components";
import About from "./components/about";
import Projects from "./components/projects";
import ProjectDetail from "./components/projectDetail";
import Resume from "./components/resume";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact element={<Home />}>
          <Route index element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectDetail/:id" element={<ProjectDetail />} />
        </Route>
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
