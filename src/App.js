import React from 'react';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Mission from "./Pages/Mission";
import Project_timeline from "./Pages/Project_timeline";
import Organization_chart from "./Pages/Organization_chart";
import News from "./Pages/News";
import RnD_project from "./Pages/RnD_project";
import Co_operative from "./Pages/Co_operative";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Mission />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
