import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import javapic from '../assets/android_and_coding_and_tools_icons/java.png';
import kotlinpic from '../assets/android_and_coding_and_tools_icons/kotlin.jpeg';
import xmlpic from '../assets/android_and_coding_and_tools_icons/xml.png';
import jetpackcomposepic from '../assets/android_and_coding_and_tools_icons/jetpackcompose.png';
import cpic from '../assets/android_and_coding_and_tools_icons/c.png';
import pythonpic from '../assets/android_and_coding_and_tools_icons/python.png';
import ubuntupic from '../assets/android_and_coding_and_tools_icons/ubuntu.jpeg';
import vspic from '../assets/android_and_coding_and_tools_icons/vscode.jpeg';
import vimpic from '../assets/android_and_coding_and_tools_icons/vim.png';
import androidstudiopic from '../assets/android_and_coding_and_tools_icons/android.png';
import gitpic from '../assets/android_and_coding_and_tools_icons/git.png';
import githubpic from '../assets/android_and_coding_and_tools_icons/github.jpeg';

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
    const [androidSkills] = useState([
        { name: 'Java', image: javapic, level: '25%' },
        { name: 'Kotlin', image: kotlinpic, level: '2%' },
        { name: 'XML', image: xmlpic, level: '15%' },
        { name: 'Jetpack Compose', image: jetpackcomposepic, level: '1%' },
    ]);

    return (
        <div className="my-6 container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Android Development Skills</h2>
            <ul className="flex flex-wrap justify-center">
                {androidSkills.map((androidSkill) => (
                    <OtherSkillItem key={androidSkill.name} otherskill={androidSkill} />
                ))}
            </ul>
        </div>
    );
};

const CodingSkills = () => {
    const [codingSkills] = useState([
        { name: 'Java', image: javapic, level: '55%' },
        { name: 'C', image: cpic, level: '75%' },
        { name: 'Python', image: pythonpic, level: '35%' },
    ]);

    return (
        <div className="my-6 container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Coding Skills</h2>
            <ul className="flex flex-wrap justify-center">
                {codingSkills.map((codingSkill) => (
                    <OtherSkillItem key={codingSkill.name} otherskill={codingSkill} />
                ))}
            </ul>
        </div>
    );
};

const UsedTools = () => {
    const [usedTools] = useState([
        { name: 'Ubuntu', image: ubuntupic, level: '65%' },
        { name: 'Vs Code', image: vspic, level: '80%' },
        { name: 'Vim', image: vimpic, level: '56%' },
        { name: 'Android Studio', image: androidstudiopic, level: '60%' },
        { name: 'Git', image: gitpic, level: '40%' },
        { name: 'Github', image: githubpic, level: '60%' },
    ]);

    return (
        <div className="my-6 container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Tools</h2>
            <ul className="flex flex-wrap justify-center">
                {usedTools.map((usedTool) => (
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
