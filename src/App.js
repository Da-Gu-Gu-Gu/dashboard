import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import {useState} from 'react'
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Sidebar from './components/Sidebar'

function App() {

  const [sidebarOpen,setSidebarOpen]=useState(false)

  const sidebarHandler=()=>{
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <Routers>
      <div className="bg-red-300 flex w-screen min-h-screen">
        <div className={`transition-all sidebar bg-red-600 ${sidebarOpen?'w-[200px]':'w-[100px]'} h-screen`}>
          <Sidebar open={sidebarHandler} />
        </div>
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
