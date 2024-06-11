import { useState,useEffect, useRef } from "react";
import Navbar from "./components/Navbar"
import Introduction from "./components/Introduction"
import Footerbar from "./components/Footerbar"
import Socials from "./components/Socials";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Socials />
      <Footerbar />
    </>
  )
}

export default App