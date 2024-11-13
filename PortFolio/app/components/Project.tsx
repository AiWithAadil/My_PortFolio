"use client";
import React from 'react';
import { MdArrowOutward } from "react-icons/md";

const Project = () => {
    const webDevelopmentProjects = [
        {
            id: 1,
            title: "Portfolio Website",
            description: "A personal resume builder showcasing My information and skills.",
            imageUrl: "/assets/pictures/resume.jpg",
            link: "https://github.com/AiWithAadil/Hackathon_Resume"
        },
        {
            id: 2,
            title: "Currency Converter",
            description: "A React app that fetches the latest exchange rates and converts currencies.",
            imageUrl: "/assets/project/currency.png",
            link: "https://next-js-currency-converter.vercel.app/"
        },
        {
            id: 3,
            title: "Task Tracker",
            description: "A atm machine app built with Typescript and integrated with local storage.",
            imageUrl: "/assets/pictures/atm.jpg",
            link: "https://github.com/AiWithAadil/Typescript_Projects/tree/main/ATM"
        },
    ];

    const dataEngineeringProjects = [
        {
            id: 1,
            title: "Stock_Market_RealTime_Project",
            description: "This project involves simulating a real-time stock market application, where stock market data is ingested in real-time, processed using Apache Kafka, and stored in Amazon S3 for further analytics using AWS Glue and Amazon Athena.",
            imageUrl: "/assets/pictures/de1.png",
            link: "https://github.com/AiWithAadil/Stock_Market_RealTime_Project_DataEngineering"
        },
        {
            id: 2,
            title: "scd-in-snowflake-using-streams-tasks",
            description: "This project demonstrates the implementation of Slowly Changing Dimensions (SCD) in Snowflake using Snowpipe.",
            imageUrl: "/assets/pictures/de2.png",
            link: "https://github.com/AiWithAadil/scd-in-snowflake-using-streams-tasks"
        },
        {
            id: 3,
            title: "Parallel_Processing_ETL_Pipeline",
            description: "This project demonstrates the implementation of a parallel processing ETL (Extract, Transform, Load) pipeline using Apache Airflow. ",
            imageUrl: "/assets/pictures/de3.png",
            link: "https://github.com/AiWithAadil/Parallel_Processing_ETL_Pipeline"
        }
    ];

    return (
        <div id='Projects'>
            <section className="text-gray-300 body-font bg-black">
                <div className="container px-5 py-12 mx-auto">
                    {/* Web Development Projects */}
                   
                    <div className="flex flex-col text-center w-full mb-8">
                        <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
                            PROJECTS
                        </h2>
                        <h1 className="sm:text-2xl text-2xl font-bold title-font mb-4 text-blue-200">Web Development Projects</h1>
                        <div className="glow mx-auto h-0.5 bg-cyan-300 mb-6 w-20"></div> {/* Add the glow class */}
                    </div>
                    <div className="flex flex-wrap justify-center -m-2">
                        {webDevelopmentProjects.map((project) => (
                            <div key={project.id} className="card bg-base-100 w-80 shadow-xl m-2">
                                <figure>
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="object-cover w-full h-40 rounded-t-lg"
                                    />
                                </figure>
                                <div className="card-body p-4">
                                    <h2 className="card-title text-gray-400">{project.title}</h2>
                                    <p className="text-gray-600">{project.description}</p>
                                    <div className="card-actions justify-end">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-primary">View Project</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Data Engineering Projects */}
                    <div className="flex flex-col text-center w-full mt-16 mb-8">
                        <h1 className="sm:text-2xl text-2xl font-bold title-font mb-4 text-blue-200">Data Engineering Projects</h1>
                        <div className="glow mx-auto h-0.5 bg-cyan-300 mb-6 w-20"></div> {/* Add the glow class */}
                    </div>
                    <div className="flex flex-wrap justify-center -m-2">
                        {dataEngineeringProjects.map((project) => (
                            <div key={project.id} className="card bg-base-100 w-80 shadow-xl m-2">
                                <figure>
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="object-cover w-full h-40 rounded-t-lg"
                                    />
                                </figure>
                                <div className="card-body p-4">
                                    <h2 className="card-title text-gray-400">{project.title}</h2>
                                    <p className="text-gray-600">{project.description}</p>
                                    <div className="card-actions justify-end">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-primary">View Project</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View More Projects Button */}
                    <div className="flex justify-center mt-12">
                        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-secondary text-lg flex items-center gap-2">
                                View All Projects on GitHub <MdArrowOutward />
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .glow {
                    box-shadow: 0 0 5px rgba(0, 183, 255, 0.8), 0 0 10px rgba(0, 183, 255, 0.8), 0 0 15px rgba(0, 183, 255, 0.8);
                }
            `}</style>
        </div>
    );
};

export default Project;