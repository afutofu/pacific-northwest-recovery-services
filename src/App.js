import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import WalkPage from "./components/WalkPage";
import AAHAAPage from "./components/AAHAAPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/awtf" element={<WalkPage />}></Route>
          <Route exact path="/aahaa" element={<AAHAAPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
