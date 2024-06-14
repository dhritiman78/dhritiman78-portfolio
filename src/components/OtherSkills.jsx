import React, { useState, useEffect } from 'react';
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
        triggerOnce: false, // only trigger once
        threshold: 0.5, // trigger when 10% of the element is visible
    });
    const currentWidth = inView ? `${otherskill.level}` : '0%';

const isRed = parseInt(currentWidth) <= 40;

    return (
        <li ref={ref} className='mx-3 my-3 webskillicons rounded px-2 py-2 grid grid-rows-[90%_auto]'>
            <div className='mx-auto my-auto'>
                <img className='w-[100px] my-2' src={otherskill.image} alt="" />
            </div>
            <div className="w-150 h-4 border-2 border-slate-200 rounded">
                <div
                    className='h-full transition-width duration-[2000ms] ease-in-out'
                    style={{ width: currentWidth , backgroundColor: isRed ? '#e76e55' : '#92cc41'}}
                ></div>
            </div>
        </li>
    );
};
const AndroidSkills = () => {
    const [AndroidSkills, setAndroidSkills] = useState([
        { 'name': 'Java', 'image': javapic, 'level': '25%' },
        { 'name': 'Kotlin', 'image': kotlinpic, 'level': '2%' },
        { 'name': 'XML', 'image': xmlpic, 'level': '15%' },
        { 'name': 'Jetpack Compose', 'image': jetpackcomposepic, 'level': '1%' }
    ])
    return (
        <div className='my-3'>
            <div>

                <div>
                    <div>
                        <h2 className='font-bold text-3xl mx-2'>2. Android Development</h2>
                        <ul className='flex flex-wrap justify-center'>
                        {AndroidSkills.map((AndroidSkill) => (
                            <OtherSkillItem key={AndroidSkill.name} otherskill={AndroidSkill} />
                        ))}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
const CodingSkills = () => {
    const [CodingSkills, setCodingSkills] = useState([
        { 'name': 'Java', 'image': javapic, 'level': '55%' },
        { 'name': 'C', 'image': cpic, 'level': '75%' },
        { 'name': 'Python', 'image': pythonpic, 'level': '35%' },
    ])
    return (
        <div className='my-3'>
            <div>

                <div>
                    <div>
                        <h2 className='font-bold text-3xl mx-2'>3. Coding Skills</h2>
                        <ul className='flex flex-wrap justify-center'>
                        {CodingSkills.map((CodingSkill) => (
                            <OtherSkillItem key={CodingSkill.name} otherskill={CodingSkill} />
                        ))}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
const UsedTools = () => {
    const [UsedTools, setUsedTools] = useState([
        { 'name': 'Ubuntu', 'image': ubuntupic, 'level': '65%' },
        { 'name': 'Vs Code', 'image': vspic, 'level': '80%' },
        { 'name': 'Vim', 'image': vimpic, 'level': '56%' },
        { 'name': 'Android Studio', 'image': androidstudiopic, 'level': '60%' },
        { 'name': 'Git', 'image': gitpic, 'level': '40%' },
        { 'name': 'Github', 'image': githubpic, 'level': '60%' }
    ])
    return (
        <div className='my-3'>
            <div>

                <div>
                    <div>
                        <h2 className='font-bold text-3xl mx-2'>4. Tools</h2>
                        <ul className='flex flex-wrap justify-center'>
                        {UsedTools.map((UsedTool) => (
                            <OtherSkillItem key={UsedTool.name} otherskill={UsedTool} />
                        ))}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
const OtherSkills = () => {
    return (
        <>
        <AndroidSkills />
        <CodingSkills />
        <UsedTools />
        </>
    )

}
export default OtherSkills