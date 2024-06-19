"use client"
import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BiSolidHappyHeartEyes } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-xl text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-black sm:py-2 sm:mt-0 mt-4">
            S.M <span className='text-l text-sky-500'>Adil</span> Ahmed
          </p>
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
      </footer>
      <style jsx>{`
        .glow {
          box-shadow: 0 0 10px rgba(0, 183, 255, 0.8), 0 0 20px rgba(0, 183, 255, 0.8), 0 0 30px rgba(0, 183, 255, 0.8), 0 0 40px rgba(0, 183, 255, 0.8), 0 0 50px rgba(0, 183, 255, 0.8), 0 0 60px rgba(0, 183, 255, 0.8);
        }
      `}</style>
    </>
  )
}

export default Footer;
