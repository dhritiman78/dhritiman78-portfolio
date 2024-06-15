import React, {useState} from 'react'

const CV = () => {
    const [skills] = useState([
    { name: 'Front-end Web-development', skills: ['html', 'css', 'javascript'] },
    { name: 'Back-end Web-development', skills: ['php', 'mysql', 'nodejs'] },
    { name: 'Database', skills: ['mysql', 'mongodb'] },
    { name: 'Android development', skills: ['java', 'kotlin'] },
    { name: 'Progrmming languages', skills: ['java', 'c', 'python'] },
    { name: 'Tools', skills: ['git', 'github'] },
    ])
    const [languages] = useState(['English', 'Hindi', 'Assamese'])
    return (
        <>
            <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
                <header className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-gray-800">Dhritiman Saikia</h1>
                    <p className="text-gray-600 sm:text-1xl text-[15px]">
                        +91 7002211547 | Morikolong Chariali, Nagaon, Assam | dhritiman.saikia.11b.244@gmail.com.com | dhritiman78-portfolio.vercel.app
                    </p>
                </header>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-gray-300 pb-2">Professional Profile</h2>
                    <p className="text-gray-700 mt-2">
                        I am Dhritiman Saikia, a B.Tech Computer Science Engineering student at Tezpur University. Proficient in web development. With freelancing experience, I've designed and implemented dynamic websites and web applications, honing my skills in front-end and back-end development. My strong academic background and practical experience, combined with a passion for coding, prepare me to contribute effectively to any development team.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-600 border-b-2 border-gray-300 pb-2">Technical Skills</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-2 grid grid-cols-2 gap-2">
                        {skills.map((skill, index) => (
                            <li key={index}>
                                <b>{skill.name}:</b> {skill.skills.join(', ')}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-600 border-b-2 border-gray-300 pb-2">Languages</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-2 grid grid-cols-2 gap-2">
                        {languages.map((language, index) => (
                            <li key={index}>{language}</li>
                        ))}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-red-600 border-b-2 border-gray-300 pb-2">Education</h2>
                    <ul className="mt-2 list-disc space-y-4 list-inside">
                        <li>
                            <strong className="text-lg text-gray-800">Tezpur University (2023 - 2027)</strong>
                            <p className="text-gray-700 mx-5">Bachelors in Technology<br />Branch: Computer Science and Engineering</p>
                        </li>
                        <li>
                            <strong className="text-lg text-gray-800">Concept Senior Secondary School (2020 - 2022)</strong>
                            <p className="text-gray-700 mx-5">Higher Secondary(10+2)</p>
                        </li>
                        <li>
                            <strong className="text-lg text-gray-800">Loyola English Medium High School School </strong>
                            <p className="text-gray-700 mx-5">High School(10+2)</p>
                        </li>
                    </ul>
                </section>

                {/* <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-indigo-600 border-b-2 border-gray-300 pb-2">Internship</h2>
                    <ul className="mt-2 space-y-4">
                        <li>
                            <strong className="text-lg text-gray-800">Marketing Intern, Salford & Co.</strong>
                            <p className="text-gray-700">
                                Conducted market research with the assigned team for the newly launched product and created awareness among the target group. Assisted the marketing manager in writing press releases and conducting surveys through phones and emails.
                            </p>
                        </li>
                    </ul>
                </section> */}

                <section>
                    <h2 className="text-2xl font-semibold text-yellow-600 border-b-2 border-gray-300 pb-2">Volunteering</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                        <li>National Service Scheme</li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default CV