"use client";
import React from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Hero = () => {
    return (
        <>
            <section className="text-white body-font bg-black ml-5 -mt-5">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            Hello, it<span className='text-sky-500 text-3xl'>'</span>s Me
                        </h1>
                        <p className='text-3xl'>
                            S.M <span className='text-sky-500'>Adil</span>
                        </p>
                        <br className="hidden lg:inline-block" />
                        <h1 className='text-3xl mb-4'>
                            I am
                            <br className="hidden lg:inline-block" />
                            <span className='glow'>
                                <Typewriter
                                    options={{
                                        strings: [
                                            "Cloud Data Engineer",
                                            "Web Developer",
                                            "GenAi Learner",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </h1>
                        <div className='w-24 h-1 mb-6 bg-sky-500'></div> {/* Added background color to the div */}
                        <p className="mb-8 leading-relaxed max-w-2xl text-gray-500 text-sm">
                            Welcome to my Portfolio! 🚀 I'm <span className="font-semibold text-sky-500">S.M. Aadil Ahmed</span>, a dynamic and driven individual with a unique blend of skills in Python programming, web development, SEO, and now venturing into the exciting world of <span className='font-semibold text-sky-500'>data engineering</span> 📊. Coming from a commerce background, my journey into the IT industry has been fueled by my insatiable curiosity and eagerness to learn 📚.
                        </p>
                        <div className="flex justify-center">
                            <a href="/assets/cv/S.M Adil CV.pdf">
                                <button className="inline-flex items-center text-black border-0 py-2 px-4 focus:outline-none ml-3 glows bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:bg-cyan-600 rounded text-lg animate-bounce">
                                    CV
                                    <FaCloudDownloadAlt className='text-xl ml-3 mt-0.5' />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full flex justify-center glow-img">
                        <img className="object-cover object-center w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-black" alt="hero" src="/assets/pictures/pic2.jpeg" />
                    </div>

                </div>
            </section>
            <style jsx>{`
               .glow-img img {
                  box-shadow: 0 0 10px rgba(0, 183, 255, 0.8), 0 0 20px rgba(0, 183, 255, 0.8), 0 0 30px rgba(0, 183, 255, 0.8), 0 0 40px rgba(0, 183, 255, 0.8), 0 0 50px rgba(0, 183, 255, 0.8), 0 0 60px rgba(0, 183, 255, 0.8);
                }
                .glow {
                 text-shadow: 0 0 10px rgba(0, 183, 255, 0.8), 0 0 20px rgba(0, 183, 255, 0.8), 0 0 30px rgba(0, 183, 255, 0.8), 0 0 40px rgba(0, 183, 255, 0.8), 0 0 50px rgba(0, 183, 255, 0.8), 0 0 60px rgba(0, 183, 255, 0.8);
                }
                .glows {
                 box-shadow: 0 0 10px rgba(0, 183, 255, 0.8), 0 0 40px rgba(0, 183, 255, 0.8);
                }
            `}</style>
        </>
    );
}

export default Hero;
