import { useState,useEffect, useRef } from "react";
import Navbar from "./components/Navbar"
import Introduction from "./components/Introduction"
import Footerbar from "./components/Footerbar"
import Socials from "./components/Socials";
import NavbarOther from "./components/NavbarOther";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footerbar />
      </>
    </Router>
  )
}

export default App