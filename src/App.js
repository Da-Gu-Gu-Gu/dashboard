import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarHandler = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Routers>
      <div className="flex h-screen overflow-hidden">
        {/* <div className="flex bg-gray-100 overflow-hidden  h-screen"> */}
        <Sidebar open={sidebarOpen} />
        {/* <div className="relative flex flex-col flex-1 h-screen overflow-y-auto overflow-x-hidden"> */}
        {/* Content area */}
        <div className="h-full w-screen">
          {" "}
          <Header sideOpenHandler={sidebarHandler} />
          <div className="relative flex flex-col flex-1  bg-gray-100 h-full  overflow-y-scroll ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/analytics" element={<About />} />
              <Route path="/ecommerce" element={<Contact />} />
              <Route path="/campaings" element={<Contact />} />
              <Route path="/team" element={<Contact />} />
              <Route path="/messages" element={<Contact />} />
              <Route path="/tasks" element={<Contact />} />
              <Route path="/inbox" element={<Contact />} />
              <Route path="/calendar" element={<Contact />} />
              <Route path="/settings" element={<Contact />} />
              <Route path="/utility" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Routers>
  );
}

export default App;
