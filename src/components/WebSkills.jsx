import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

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
  const [webskills, setWebskills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/skills/webskills`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWebskills(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="my-6 container mx-auto">
      <h2 className="text-3xl mx-2 font-bold text-center mb-6">Web Development Skills</h2>
      <ul className="flex flex-wrap justify-center">
        {webskills.map((webskill) => (
          <SkillItem key={webskill.name} webskill={webskill} />
        ))}
      </ul>
    </div>
  );
};

export default WebSkills;
