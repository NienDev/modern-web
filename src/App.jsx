import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feature from "./pages/Feature";
import Solution from "./pages/Solution";
import About from "./pages/About";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div className="w-[1200px] mx-auto">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/modern-web/home" element={<Home />} />
          <Route path="/modern-web/about" element={<About />} />
          <Route path="/modern-web/feature" element={<Feature />} />
          <Route path="/modern-web/Solution" element={<Solution />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
