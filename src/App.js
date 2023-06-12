import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import './App.css'
import WelcomePage from "./Welcome";
import Sidebar from "./Sidebar";
import ContactPage from './Contact'
import AboutPage from './About'
import ProjectsPage from './Projects'


function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') {
      setShowSidebar(true)
    }
    else {
      setShowSidebar(false)
    }
  }, [location.pathname])
  
  return (
    <div className="App">
      {showSidebar && <Sidebar/>}
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
