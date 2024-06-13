import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import htmlpic from '../assets/weblangicons/html.png';
import csspic from '../assets/weblangicons/css.png';
import jspic from '../assets/weblangicons/js.png';
import phppic from '../assets/weblangicons/php.png';
import mysqlpic from '../assets/weblangicons/mysql.png';
import nodejspic from '../assets/weblangicons/nodejs.png';
import expresspic from '../assets/weblangicons/express.png';
import mongopic from '../assets/weblangicons/mongo.png';
import reactpic from '../assets/weblangicons/react.png';
import tailpic from '../assets/weblangicons/tailwind.png';
const SkillItem = ({ webskill }) => {
    const { ref, inView } = useInView({
        triggerOnce: false, // only trigger once
        threshold: 0.5, // trigger when 10% of the element is visible
    });

    return (
        <li ref={ref} className='mx-3 my-3 webskillicons rounded px-2 py-2 grid grid-rows-[90%_auto]'>
            <div className='mx-auto my-auto'>
                <img className='w-[200px] my-2' src={webskill.image} alt="" />
            </div>
            <div className="w-150 h-4 border-2 border-slate-200 rounded">
                <div
                    className='bg-purple-700 h-full transition-width duration-1000 ease-in-out'
                    style={{ width: inView ? `${webskill.level}` : '0%' }}
                ></div>
            </div>
        </li>
    );
};
const WebSkills = () => {
    const [webskills, setwebSkills] = useState([
        { 'name': 'HTML', 'image': htmlpic, 'level': '92%' },
        { 'name': 'Css', 'image': csspic, 'level': '65%' },
        { 'name': 'JavaScript', 'image': jspic, 'level': '65%' },
        { 'name': 'PHP', 'image': phppic, 'level': '60%' },
        { 'name': 'MySQL', 'image': mysqlpic, 'level': '50%' },
        { 'name': 'Node.js', 'image': nodejspic, 'level': '70%' },
        { 'name': 'Express.js', 'image': expresspic, 'level': '50%' },
        { 'name': 'MongoDB', 'image': mongopic, 'level': '68%' },
        { 'name': 'React', 'image': reactpic, 'level': '35%' },
        { 'name': 'Tailwind CSS', 'image': tailpic, 'level': '35%' },
    ])
    return (
        <div className='my-3'>
            <div>

                <div>
                    <div>
                        <h2 className='font-bold text-3xl mx-2'>1. Web Development</h2>
                        <ul className='flex flex-wrap justify-center'>
                        {webskills.map((webskill) => (
                            <SkillItem key={webskill.name} webskill={webskill} />
                        ))}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default WebSkills