import { useState,useEffect, useRef } from "react";
import Navbar from "./components/Navbar"
import Introduction from "./components/Introduction"
import Footerbar from "./components/Footerbar"
import Socials from "./components/Socials";

function App() {
  const[isHome, setHome] = useState(true);
  const[isAbout, setAbout] = useState(false);
  return (
    <>
     {isHome && <Navbar />} 
     {isHome && <Introduction />} 
     {isHome && <Socials />}    
     {isAbout && "Hello world"}   
      <Footerbar />
    </>
  )
}

export default App