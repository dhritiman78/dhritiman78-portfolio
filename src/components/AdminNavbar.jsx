import React, { useState, useEffect, useRef } from 'react'
import '../App.css';
import logo from '../assets/logo.png';
const AdminNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [values, setValues] = useState([
      { 'name': 'Messages', 'link': '/admin/contactrequests' },
      { 'name': 'Update Projects', 'link': '/admin/updateProjects' },
    ]);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
      <section className="w-[100%] nav-bottom-border fixed top-0">
        <div className='w-[100%] bg-[rgba(255,255,255)]'>
            <hr />
          <header className='max-w-[1170px]  mx-auto'>
            <div className='grid sm:grid-cols-2 grid-cols-[70%_auto] px-[10px]'>
              <figure className='z-auto sm:mx-14'>
                <img src={logo} className='w-[259px] h-[67px]' alt="Logo" />
              </figure>
              <div className="block md:hidden">
                <button onClick={toggleMenu}>
                  <svg className="w-14 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                  </svg>
                </button>
              </div>
              <div className={`w-[-moz-available] px-2 md:flex md:items-center md:w-auto sm:relative sm:top-0 absolute top-[67px] ${isOpen ? "block z-[1] bg-[rgba(0,0,0,0.9)]" : "hidden"}`}>
                <ul className={`md:flex md:space-x-8 mt-4 md:mt-0  font-bold ${isOpen && "text-white"}`}>
                  {values.map((val, index) => (
                    <li key={index}>
                      <a href={val.link} className={'block py-3 md:py-3'}>
                        {val.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </header>
        </div>
      </section>
    </>
  );
}

export default AdminNavbar