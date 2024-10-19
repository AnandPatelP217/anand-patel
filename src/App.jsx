import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contactuus from "./pages/Contactuus";

import AboutUs from "./pages/AboutUs";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import Certificatess from "./pages/Certificatess";






const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/about" Component={AboutUs} />
        <Route exact path="/project" Component={Project} />
        <Route path="/resume" Component={Resume} />
        <Route path="/certificate" Component={Certificatess} />
        <Route path="/contactus" Component={Contactuus} />
      
       
      </Routes>
    </>
  );
};

export default App;
