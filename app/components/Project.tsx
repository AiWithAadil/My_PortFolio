"use client"
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Project = () => {
    return (
        <div id='Projects'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">My Projects</h1>
                        <div className="w-20 h-0.5 bg-cyan-300 mb-6 mx-auto glow"></div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 sm:w-1/2 p-2">
                            <div className="flex relative glows rounded">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-lg" src="/assets/project/currency.png" />
                                <div className="px-6 py-8 relative z-10 w-full border-4 border-gray-200 bg-black opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">Currency Converter</h1>
                                    <p className="leading-relaxed text-sky-200">This React component allows users to input an amount, select currencies to convert between, fetch the latest exchange rate using an API, and display the converted amount. It manages user input and API interaction using state and event handlers.</p>
                                    <a href="https://next-js-currency-converter.vercel.app/">
                                        <button className='text-white text-lg'><u>view</u></button></a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-2">
                            <div className="flex relative glows rounded">

                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-lg" src="/assets/project/etl.avif" />
                                <div className="px-6 py-8 relative z-10 w-full border-4 border-gray-200 bg-black opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">ETL Project</h1>
                                    <p className="leading-relaxed text-sky-200">Project for Cloud Data Engineering Roadmap
                                        Project 01: Acquiring and processing information on world's largest bank
                                        Task 1: Logging function
                                        Task 2: Extraction of data
                                        Task 3: Transformation of data
                                        Task 4: Loading to CSV
                                        Task 5: Loading to Database
                                        Task 6: Function to Run queries on Database
                                        Task 7: Verify log entries.</p>
                                    <a href="https://github.com/AiWithAadil/ETL-With-Python-S.M-Adil-">
                                        <button className='text-white text-lg'><u>view</u></button></a>
                                </div>

                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-2">
                            <div className="flex relative glows rounded">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-lg" src="/assets/project/temperature-converter.webp" />
                                <div className="px-6 py-8 relative z-10 w-full border-4 border-gray-200 bg-black opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">Temperature Converter</h1>
                                    <p className="leading-relaxed text-sky-200">This program converts values between Celsius and Fahrenheit using functions to store values and a while loop to continuously run the code.</p>
                                    <a href="https://github.com/AiWithAadil/Python_Projects_With_Senarios/blob/main/Senarios%20%26%20Codes/Temperature_converter.ipynb">
                                        <button className='text-white text-lg'><u>view</u></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <a href="https://github.com/AiWithAadil?tab=repositories" className="relative inline-flex items-center justify-center leading-normal no-underline pb-1 text-white font-sans font-bold text-sm uppercase hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 transition group">
                            Check Out More Projects
                            <MdArrowOutward /><span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-bottom transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                        </a>
                    </div>
                </div>
            </section >
            <style jsx>{`
                .glow {
                    box-shadow: 0 0 10px rgba(0, 183, 255, 0.8), 0 0 20px rgba(0, 183, 255, 0.8), 0 0 30px rgba(0, 183, 255, 0.8), 0 0 40px rgba(0, 183, 255, 0.8), 0 0 50px rgba(0, 183, 255, 0.8), 0 0 60px rgba(0, 183, 255, 0.8);
                }
                .glows {
                    box-shadow: 0 0 10px rgba(0, 183, 255, 0.8), 0 0 40px rgba(0, 183, 255, 0.8), 0 0 50px rgba(0, 183, 255, 0.8);
                }
            `}</style>
        </div >
    )
}

export default Project
