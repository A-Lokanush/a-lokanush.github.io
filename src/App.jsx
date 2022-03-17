import "./App.css";
import Home from "./components/Home";
import GithubStats from "./components/GithubStats";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/github-stats" element={<GithubStats />} />
      </Routes>
    </Router>
  );
}

export default App;
