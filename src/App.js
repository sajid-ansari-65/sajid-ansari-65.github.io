import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components";
import About from "./components/about";
import Projects from "./components/projects";
import ProjectDetail from "./components/projectDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route index element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectDetail/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
