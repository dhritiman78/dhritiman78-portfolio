import React, { useState } from 'react';
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
    triggerOnce: true, // Trigger animation once
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  const currentWidth = inView ? `${webskill.level}` : '0%';
  const isRed = parseInt(currentWidth) <= 40;

  return (
    <li
      ref={ref}
      className="bg-white shadow-lg rounded-lg transition-shadow duration-300 hover:shadow-xl p-6 mx-4 my-4 w-[260px] flex flex-col items-center"
    >
      <div className="mb-4">
        <img className="w-20 h-20" src={webskill.image} alt={`${webskill.name} icon`} />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{webskill.name}</h3>
      <div className="w-full h-4 bg-gray-200 rounded-lg mt-2 relative overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ease-in-out`}
          style={{
            width: currentWidth,
            backgroundColor: isRed ? '#e76e55' : '#92cc41',
          }}
        ></div>
      </div>
      <span className="text-gray-600 text-sm mt-1">{webskill.level}</span>
    </li>
  );
};

const WebSkills = () => {
  const [webskills] = useState([
    { name: 'HTML', image: htmlpic, level: '92%' },
    { name: 'CSS', image: csspic, level: '65%' },
    { name: 'JavaScript', image: jspic, level: '65%' },
    { name: 'PHP', image: phppic, level: '60%' },
    { name: 'MySQL', image: mysqlpic, level: '50%' },
    { name: 'Node.js', image: nodejspic, level: '70%' },
    { name: 'Express.js', image: expresspic, level: '50%' },
    { name: 'MongoDB', image: mongopic, level: '68%' },
    { name: 'React', image: reactpic, level: '35%' },
    { name: 'Tailwind CSS', image: tailpic, level: '35%' },
  ]);

  return (
    <div className="my-6 container mx-auto">
      <h2 className="text-3xl mx-2 font-bold text-center mb-6"> Web Development Skills</h2>
      <ul className="flex flex-wrap justify-center">
        {webskills.map((webskill) => (
          <SkillItem key={webskill.name} webskill={webskill} />
        ))}
      </ul>
    </div>
  );
};

export default WebSkills;
