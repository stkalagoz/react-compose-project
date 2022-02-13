import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Comm from "./page/Comm";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="comm" element={<Comm />} />
          <Route path="*" element={<div>merhaba</div>} />
      </Routes>
    </div>
  );
}

export default App;
