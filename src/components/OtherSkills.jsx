import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Loading from './Loading';


const OtherSkillItem = ({ otherskill }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // only trigger once
        threshold: 0.5, // trigger when 50% of the element is visible
    });

    const currentWidth = inView ? `${otherskill.level}` : '0%';
    const isRed = parseInt(currentWidth) <= 40;

    return (
        <li
            ref={ref}
            className="bg-white shadow-lg rounded-lg transition-shadow duration-300 hover:shadow-xl p-6 mx-4 my-4 w-[260px] flex flex-col items-center"
        >
            <div className="mb-4">
                <img className="w-20 h-20" src={otherskill.image} alt={`${otherskill.name} icon`} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{otherskill.name}</h3>
            <div className="w-full h-4 bg-gray-200 rounded-lg mt-2 relative overflow-hidden">
                <div
                    className="h-full transition-all duration-1000 ease-in-out"
                    style={{
                        width: currentWidth,
                        backgroundColor: isRed ? '#e76e55' : '#92cc41',
                    }}
                ></div>
            </div>
            <span className="text-gray-600 text-sm mt-1">{otherskill.level}</span>
        </li>
    );
};

const AndroidSkills = () => {
        const [androidSkills, setandroidSkills] = useState([]);
        const [loading, setLoading] = useState(true); // Loading state

      
        useEffect(() => {
          fetch(import.meta.env.VITE_API_URL+'/api/skills/androidskills')
            .then((res) => res.json())
            .then((data) => {setandroidSkills(data)
                setLoading(false);
            });
        }
        , []);

    return (
        <div className="my-6 container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Android Development Skills</h2>
            <ul className="flex flex-wrap justify-center">
                {loading? <Loading />: androidSkills.map((androidSkill) => (
                    <OtherSkillItem key={androidSkill.name} otherskill={androidSkill} />
                ))}
            </ul>
        </div>
    );
};

const CodingSkills = () => {
    const [codingSkills, setcodingSkills] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL+'/api/skills/codingskills')
          .then((res) => res.json())
          .then((data) => {setcodingSkills(data)
            setLoading(false);
          });
      }
      , []);
    return (
        <div className="my-6 container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Coding Skills</h2>
            <ul className="flex flex-wrap justify-center">
                {loading? <Loading />: codingSkills.map((codingSkill) => (
                    <OtherSkillItem key={codingSkill.name} otherskill={codingSkill} />
                ))}
            </ul>
        </div>
    );
};

const UsedTools = () => {

    const [usedTools, setUsedTools] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL+'/api/skills/toolskills')
          .then((res) => res.json())
          .then((data) => {setUsedTools(data)
            setLoading(false);
          });
      }
      , []);
    return (
        <div className="my-6 container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Tools</h2>
            <ul className="flex flex-wrap justify-center">
                {loading? <Loading />: usedTools.map((usedTool) => (
                    <OtherSkillItem key={usedTool.name} otherskill={usedTool} />
                ))}
            </ul>
        </div>
    );
};

const OtherSkills = () => {
    return (
        <>
            <AndroidSkills />
            <CodingSkills />
            <UsedTools />
        </>
    );
};

export default OtherSkills;
