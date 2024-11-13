"use client"
import React from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";

type Skill = {
    name: string;
};

const skills: { [key: string]: Skill[] } = {
    python: [
        { name: "Python Programming" },
        { name: "Pandas" },
        { name: "Numpy" },
        { name: "Problem Solving" },
    ],
    webDevelopment: [
        { name: "HTML/CSS" },
        { name: "JavaScript/Typescript" },
        { name: "Next.js" },
        { name: "Node.js" },
        { name: "Tailwind" },
    ],
    dataEngineering: [
        { name: "SQL" },
        { name: "Big Data Processing" },
        { name: "ETL" },
        { name: "EDA" },
        { name: "Kafka" },
        { name: "Airflow" },
        { name: "Docker" },
        { name: "Linux" },
    ],
    Seo: [
        { name: "Keyword Research" },
        { name: "On-Page SEO Optimization" },
        { name: "Off-Page SEO Techniques" },
        { name: "Technical SEO Audits" },
        { name: "SEO Content Strategy" },
        { name: "Link Building Strategies" },
    ],
};

const Skill = () => {
    return (
        <div>
            <section id="skills" className="text-white body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
                            CATEGORIES
                        </h2>
                        <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-blue-200 relative">
                            My Skills
                        </h1>
                        <div className="inset-x-0 bottom-0 mx-auto h-0.5 bg-cyan-300 mb-6 w-20 glow"></div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        {/* Python */}
                        <div className="mb-8 mr-8">
                            <h2 className="text-lg font-semibold mb-3 text-white ml-2">Python</h2>
                            <div className="bottom-0 mx-auto h-0.5 bg-cyan-300 mb-6 w-20 glow ml-0.5"></div>
                            {skills.python.map((skill, index) => (
                                <SkillItem key={index} name={skill.name} />
                            ))}
                        </div>
                        {/* Web Development */}
                        <div className="mb-8 mr-8">
                            <h2 className="text-lg font-semibold mb-3 text-white">Web Development</h2>
                            <div className="bottom-0 mx-auto h-0.5 bg-cyan-300 mb-6 w-20 glow ml-0.5"></div>
                            {skills.webDevelopment.map((skill, index) => (
                                <SkillItem key={index} name={skill.name} />
                            ))}
                        </div>
                        {/* Data Engineering */}
                        <div className="mb-8 mr-8">
                            <h2 className="text-lg font-semibold mb-3 text-white">Data Engineering</h2>
                            <div className="bottom-0 mx-auto h-0.5 bg-cyan-300 mb-6 w-20 glow ml-0.5"></div>
                            {skills.dataEngineering.map((skill, index) => (
                                <SkillItem key={index} name={skill.name} />
                            ))}
                        </div>
                        {/* SEO */}
                        <div className="mb-8 mr-8">
                            <h2 className="text-lg font-semibold mb-3 text-white">SEO</h2>
                            <div className="bottom-0 mx-auto h-0.5 bg-cyan-300 mb-6 w-20 glow ml-0.5"></div>
                            {skills.Seo.map((skill, index) => (
                                <SkillItem key={index} name={skill.name} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .glow {
                    box-shadow: 0 0 10px rgba(0, 183, 255, 0.8), 0 0 20px rgba(0, 183, 255, 0.8), 0 0 30px rgba(0, 183, 255, 0.8), 0 0 40px rgba(0, 183, 255, 0.8), 0 0 50px rgba(0, 183, 255, 0.8), 0 0 60px rgba(0, 183, 255, 0.8);
                }
            `}</style>
        </div>
    );
};

const SkillItem: React.FC<{ name: string }> = ({ name }) => (
    <div className="flex items-center mb-3 mr-3">
        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-sky-300 text-white flex-shrink-0">
            <AiOutlineCheckSquare className="text-xl font-bold" />
        </div>
        <h3 className="text-sky-300 text-lg title-font font-medium">{name}</h3>
    </div>
);

export default Skill;
