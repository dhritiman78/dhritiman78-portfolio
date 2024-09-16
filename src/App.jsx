import { useState,useEffect, useRef } from "react";
import Navbar from "./components/Navbar"
import Introduction from "./components/Introduction"
import Footerbar from "./components/Footerbar"
import Socials from "./components/Socials";
import NavbarOther from "./components/NavbarOther";
import About from "./components/About";
import CVpage from "./components/CVpage";
import CVblank from "./components/CV";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectPage from "./components/ProjectPage";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Socials />
    </div>
  );
};
const AboutPage = () => {
  return (
    <div>
      <NavbarOther />
      <About />
    </div>
  );
}
const Projects = () => {
  return (
    <div>
      <NavbarOther />
      <ProjectPage />
    </div>
  );
}
const Services = () => {
  return (
    <div>
      <NavbarOther />
    </div>
  );
}
const CV = () => {
  return (
    <div>
      <NavbarOther />
      <CVpage />
      </div>
  );
}
const Contact = () => {
  return (
    <div>
      <NavbarOther />
    </div>
  );
}

function App() {
  
  return (
    <Router>
      <>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/blankcv" element={<CVblank />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        {location.pathname !== "/blankcv" && <Footerbar />}
        {/* <Footerbar /> */}
      </>
    </Router>
  )
}

export default App