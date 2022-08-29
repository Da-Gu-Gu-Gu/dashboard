import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Header from "./components/Navigation/Header";
import Sidebar from "./components/Navigation/Sidebar";

function App() {
  return (
    <Routers>
        <div className="w-screen flex bg-red-300">
          <Sidebar />
          <div className="w-screen bg-purple-300 h-screen overflow-y-scroll">

          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </div>
          </div>
    </Routers>
  );
}

export default App;
