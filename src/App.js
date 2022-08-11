import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarHandler = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Routers>
      <div className="bg-gray-200  flex w-screen min-h-screen">
        <div
          className={`transition-all  sidebar bg-white  ${
            sidebarOpen ? "w-[250px]" : "w-[100px] text-center "
          }  min-h-screen`}
        >
          <Sidebar open={sidebarHandler} sideopen={sidebarOpen} />
        </div>
        <div className="grow ml-10 min-h-screen flex flex-col mr-5">
          <Nav />

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
