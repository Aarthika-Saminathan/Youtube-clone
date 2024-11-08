import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';
import Sidebar from './Components/Sidebar/Sidebar';

const App = () => {
  const [sidebar, setSidebar] = useState(true); // Sidebar is initially expanded

  return (
    <div>
      {/* Pass the sidebar state to the Sidebar component */}
      <Sidebar sidebar={sidebar} />

      {/* Navbar triggers the sidebar toggle */}
      <Navbar setSidebar={setSidebar} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
