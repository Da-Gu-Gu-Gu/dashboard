import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <Routers>
      <div className="bg-red-300 flex w-screen min-h-screen">
        <div className="sidebar bg-red-600 w-[200px] h-screen">Sidebar</div>
        <div className="grow flex flex-col">
          <div className="nav h-[50px]  bg-blue-300  w-full">aa</div>

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
