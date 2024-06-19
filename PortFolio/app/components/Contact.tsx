"use client"
import React from 'react';
import { IoLogoGithub } from 'react-icons/io';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';

const Contact = () => {
  return (
    <div id='Contact' className="flex flex-col items-center justify-center min-h-screen">
      <section className="text-white body-font relative">
        <form className="max-w-md bg-opacity-75 rounded-md px-8 py-6 shadow-md mt-6 bg-blue-200 glows" action="https://formspree.io/f/xblrrrjy"
          method="POST">
          <h1 className="text-2xl mb-4 text-center text-black font-bold">Contact Me</h1>
          <div className="bottom-0 mx-auto h-0.5 bg-cyan-300 mb-6 w-22 glow ml-18"></div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="appearance-none rounded-md relative block w-full px-3 py-2 mb-4 border-b-2 border-blue-700 placeholder-black text-black bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="appearance-none rounded-md relative block w-full px-3 py-2 mb-4 border-b-2 border-blue-700 placeholder-black text-black bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="appearance-none rounded-md relative block w-full px-3 py-2 mb-4 border-b-2 border-blue-700 placeholder-black text-black bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          ></textarea>
          <button
            type="submit"
            className="mt-8 glows px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition duration-300"
          >
            Submit
          </button>
        </form>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-white">smaadil688@gmail.com</a>
          <br />
          <br />
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href='https://github.com/AiWithAadil' className="ml-3 text-black text-xl mr-3 glow bg-blue-500">
              <IoLogoGithub />
            </a>
            <a href='https://www.instagram.com/sm_aadil_ahmed/' className="ml-3 text-black text-xl mr-3 glow bg-blue-500">
              <BsInstagram />
            </a>
            <a href='https://www.linkedin.com/in/sm-aadil-ahmed-4222182a6/' className="ml-3 text-sky-500 text-xl mr-4 glow">
              <BsLinkedin />
            </a>
          </span>
        </div>
      </section>
      <style jsx>{`
        .glow {
                 box-shadow: 0 0 10px rgba(0, 183, 255, 0.8), 0 0 20px rgba(0, 183, 255, 0.8), 0 0 30px rgba(0, 183, 255, 0.8), 0 0 40px rgba(0, 183, 255, 0.8), 0 0 50px rgba(0, 183, 255, 0.8), 0 0 60px rgba(0, 183, 255, 0.8);
                }
       .glows{
           box-shadow:  0 0 10px rgba(0, 183, 255, 0.8), 0 0 40px rgba(0, 183, 255, 0.8);
          }
      `}</style>
    </div>
  );
};

export default Contact;