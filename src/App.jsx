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
import ServicePage from "./components/ServicePage";
import ContactPage from "./components/ContactPage";
import Admin from "./components/Admin";
import AdminNavbar from "./components/AdminNavbar";
import ContactRequests from "./components/ContactRequests";
import UpdateProjects from "./components/UpdateProjects";
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
      <ServicePage />
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
      <ContactPage />
    </div>
  );
}
const AdminLogin = () => {
  return (
    <div>
      <NavbarOther />
      <Admin />
    </div>
  );
}
const ConatctReqView = () => {
  return (
    <div>
      <AdminNavbar />
      <ContactRequests />
    </div>
  );
}
const UpdateProjectsView = () => {
  return (
    <div>      
      <AdminNavbar />
      <UpdateProjects />
    </div>
  )
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
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/contactrequests" element={<ConatctReqView />} />
          <Route path="/admin/updateProjects" element={<UpdateProjectsView />} />
        </Routes>
        {location.pathname !== "/blankcv" && <Footerbar />}
        {/* <Footerbar /> */}
      </>
    </Router>
  )
}

export default App