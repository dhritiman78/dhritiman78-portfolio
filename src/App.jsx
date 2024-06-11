import { useState,useEffect, useRef } from "react";
import Navbar from "./components/Navbar"
import Introduction from "./components/Introduction"
import Footerbar from "./components/Footerbar"

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Footerbar />
    </>
  )
}

export default App
