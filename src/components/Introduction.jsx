import React from 'react'
import { useRef } from 'react';
import sidepic from '../assets/side_pic.png'
import { motion, useInView } from 'framer-motion'

const Introduction = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: false });

  const sectionVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <>
   <motion.section ref={ref}
        className='flex flex-col mx-auto w-[90%] my-10'
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}>
    <div>
        <h1 className='font-bold text-center sm:text-4xl text-2xl'>LET ME INTRODUCE MYSELF</h1>
    </div>
    <div className='grid sm:grid-cols-[60%_auto]'>
        <p className='my-10 sm:text-[20px]'>
I am <b>Dhritiman Saikia</b>, a <pb>B.Tech Computer Science Engineering</pb> student at the <b>School of Engineering, Tezpur University</b>. I have a strong foundation in web development and programming, proficient in <pb>JavaScript, HTML, CSS, PHP, and MySQL, with basic knowledge of Java and C</pb>, . I am currently learning the <pb>MERN stack, Next.js, Python, Java DSA, and C++</pb>.
<br />
With hands-on freelancing experience, I have successfully designed and implemented dynamic websites and web applications. My projects have honed my skills in <pb>front-end</pb> and <pb>back-end development</pb>, client communication, and problem-solving. I specialize in creating responsive, interactive, and visually appealing websites that meet client specifications.
<br />
I am passionate about coding and enjoy tackling challenging problems to find innovative solutions. My strong academic background and practical experience, combined with a continuous learning mindset, prepare me to contribute effectively to any development team and make a meaningful impact.👋
</p>
<motion.div whileHover={{ scale: 1.2, rotate: 90 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}>
    <img src={sidepic} alt='dhritiman' />
</motion.div>
    </div>
   </motion.section>
    </>
  )
}

export default Introduction
