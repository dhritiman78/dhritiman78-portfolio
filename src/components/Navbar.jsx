import React from 'react'
import '../App.css'
import logo from '../assets/logo.png'
import profile from '../assets/abidface.png'
import {useState, useEffect} from "react";
import { TypeAnimation } from 'react-type-animation';

const AnimatedComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Mobile Development Ethusiast',
        1000,
        'Java Programmer',
        1000,
        'Python Programmer',
        1000
      ]}
      wrapper="span"
      speed={50}
      // style={{ fontSize: '10px', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    const[values,setValues] = useState([
        {
            'name': 'Home',
            'link' : './'
        },
        {
            'name': 'About',
            'link' : './'
        },
        {
            'name': 'Projects',
            'link' : './'
        },
        {
            'name': 'Services',
            'link' : './'
        },
        {
            'name': 'CV',
            'link' : './'
        },
        {
            'name': 'Contact',
            'link' : './'
        }
    ])
    
    return (
        <>
        <section className="w-[100%] h-screen bg-img bg-center bg-cover">
            <div className='w-[100%] h-screen bg-[rgba(0,0,0,0.5)]'>
                <header className='max-w-[1170px]  mx-auto'>
                    <div className='grid sm:grid-cols-2 grid-cols-[70%_auto] px-[10px]'>
                        <figure className='z-auto sm:mx-14'>
                        <img src={logo} className='w-[259px] h-[67px]' alt="Logo" />
                        </figure>
                       <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none p-3">
            <svg className="h-[2.5rem] w-[4rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <div className={`w-full md:flex md:items-center md:w-auto sm:relative sm:top-0 absolute top-[50px] ${isOpen ? "block" : "hidden"}`}>
          <ul className="md:flex md:space-x-8 mt-4 md:mt-0 text-white font-bold">
            {values.map(values => {
                return (
                    <>
                    <li><a href={values.link} className={(values.name=='Contact' && !isOpen)?'block p-3 bg-red-600 rounded-[5px] ':'block py-3 md:py-3'}>{values.name}</a></li>
                    </>
                )
            })}
          </ul>
        </div>

                    </div>
                </header>
                <div className="max-w-[1170px] mx-auto sm:py-[150px] py-12 grid sm:grid-cols-[60%_auto] grid-cols-1 gap-6 text-white">
            <div className="order-2 sm:order-1 sm:mx-10 mx-3">
              <h1 className="font-bold sm:text-7xl text-4xl text-center sm:text-left">Hi, I am Dhritiman Saikia</h1>
              <h2 className="sm:text-4xl text-[25px] sm:text-left text-center my-2">
                I am a <span className="text-[rgba(255,87,0)] font-bold"><AnimatedComponent /></span>
              </h2>
            </div>
            <div className="order-1 sm:order-2 mx-auto">
              <img className="sm:rounded-[130px] rounded-[90px] sm:h-[270px] h-[190px] sm:w-[270px] w-[186px]" src={profile} alt="Profile" />
            </div>
          </div>
            </div>
        </section>
        </>
    )
}
export default Navbar