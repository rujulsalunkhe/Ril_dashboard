import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Instrument from './pages/Instrument.jsx';
import Report from './pages/Report.jsx';
import WorkOrder from './pages/WorkOrder.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen}>
        <div style={{ paddingTop: "63px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/instrument" element={<Instrument />} />
            <Route path="/workorder" element={<WorkOrder />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </div>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
