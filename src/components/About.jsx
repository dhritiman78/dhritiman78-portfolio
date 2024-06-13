import React, { useState } from 'react'
import sidepic from '../assets/side_pic.png';
import WebSkills from './WebSkills';

const About = () => {
    return (
        <>
            <section className='mt-32 mb-2 mx-5'>
                <div className='grid sm:grid-cols-[65%_auto] sm:mx-5'>
                    <div>
                        <h1 className='font-bold text-5xl text-purple-800 text-center my-2'>Know Who I'm</h1>
                        <p> I am <b>Dhritiman Saikia</b>, a <pb>B.Tech Computer Science Engineering</pb> student at the <b>School of Engineering, Tezpur University</b>. I have a strong foundation in web development and programming, proficient in <pb>JavaScript, HTML, CSS, PHP, and MySQL, with basic knowledge of Java and C</pb>, . I am currently learning the <pb>MERN stack, Next.js, Python, Java DSA, and C++</pb>.
                            <br />
                            With hands-on freelancing experience, I have successfully designed and implemented dynamic websites and web applications. My projects have honed my skills in <pb>front-end</pb> and <pb>back-end development</pb>, client communication, and problem-solving. I specialize in creating responsive, interactive, and visually appealing websites that meet client specifications.
                            <br />
                            I am passionate about coding and enjoy tackling challenging problems to find innovative solutions. My strong academic background and practical experience, combined with a continuous learning mindset, prepare me to contribute effectively to any development team and make a meaningful impact.👋</p>
                    </div>
                    <div>
                        <img src={sidepic} alt="img" />
                    </div>
                </div>
            </section>
            <div><h1 className='font-bold text-5xl text-purple-800 text-center my-2'> My Skillset</h1></div>
            <WebSkills />
        </>
    )
}

export default About