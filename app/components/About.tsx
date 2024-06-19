"use client"
import React from 'react';

const About = () => {
    return (
        <div id='AboutMe'>
            <section className="text-white body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full flex justify-center glow-img">
                        <img className="object-cover object-center w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-black" alt="hero" src="/assets/pictures/pic3.jpeg" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-400">About Me 🌟</h1>
                        <div className="w-20 h-0.5 bg-cyan-300 mb-6 mt-2 mx-auto md:mx-0 glow"></div>
                        <p className="mb-8 leading-relaxed text-gray-400">
                            Hello! I'm <span className='font-semibold text-sky-500'>S.M Adil</span> 👋, a multifaceted professional with a passion for technology and innovation. My journey began in commerce, but my interests and skills have since expanded into various domains, including <span className='font-semibold text-sky-500'>Python programming</span>, <span className='font-semibold text-sky-500'>web development</span>, <span className='font-semibold text-sky-500'>SEO</span>, <span className='font-semibold text-sky-500'>data engineering</span>, and <span className='font-semibold text-sky-500'>artificial intelligence</span>.
                        </p>
                        <p className="mb-8 leading-relaxed text-gray-400">
                            With a strong foundation in commerce, I bring a unique perspective to the tech world. My expertise in Python programming allows me to create efficient and effective solutions, while my web development skills enable me to build robust and user-friendly websites. As an SEO <span className='font-semibold text-sky-500'>expert</span>, I ensure that these websites not only look good but also perform well in search engine rankings.
                        </p>
                        <p className="mb-8 leading-relaxed text-gray-400">
                            Currently, I am diving deep into the realms of <span className='font-semibold text-sky-500'>data engineering and artificial intelligence</span>, constantly learning and growing in these exciting fields. My goal is to leverage my diverse skill set to develop innovative solutions that drive business success and make a positive impact on the world. 🚀
                        </p>
                        <div className="flex justify-center">
                            <a href="#Contact" className="mt-8 glows px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition duration-300">Contact Me</a>                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
               .glow-img img {
                  box-shadow: 0 0 10px rgba(0, 183, 255, 0.8), 0 0 20px rgba(0, 183, 255, 0.8), 0 0 30px rgba(0, 183, 255, 0.8), 0 0 40px rgba(0, 183, 255, 0.8), 0 0 50px rgba(0, 183, 255, 0.8), 0 0 60px rgba(0, 183, 255, 0.8);
                }
                .glow {
                 box-shadow: 0 0 10px rgba(0, 183, 255, 0.8), 0 0 20px rgba(0, 183, 255, 0.8), 0 0 30px rgba(0, 183, 255, 0.8), 0 0 40px rgba(0, 183, 255, 0.8), 0 0 50px rgba(0, 183, 255, 0.8), 0 0 60px rgba(0, 183, 255, 0.8);
                }
                .glows {
                 box-shadow:  0 0 10px rgba(0, 183, 255, 0.8), 0 0 40px rgba(0, 183, 255, 0.8);
                }
            `}</style>
        </div>
    );
}

export default About;
