import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AddSchool from "./components/AddSchool";
import ListSchools from "./components/ListSchools";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} />

        {/* Main Content */}
        <div className="flex-1 bg-gray-100">
          {/* Top Bar */}
          <div className="bg-white shadow p-4 relative flex items-center justify-center">
            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="fixed top-4 left-4 z-[60] bg-white shadow-md px-3 py-1 rounded-lg text-2xl cursor-pointer hover:text-blue-600"
            >
              ☰
            </button>

            {/* Center Title */}
            <h1 className="text-lg font-semibold">School Dashboard</h1>
          </div>

          {/* Pages */}
          <div className="p-6">
            <Routes>
              <Route path="/" element={<AddSchool />} />
              <Route path="/list" element={<ListSchools />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
