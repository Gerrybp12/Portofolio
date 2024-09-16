'use client'
import React from 'react';
import { CiMail } from 'react-icons/ci';
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaLine } from 'react-icons/fa';

const logoStyle = {color: "white", fontSize: "1.5em"};

const Footer = () => {
    return (
        <div className="flex flex-col justify-center text-center items-center bg-black bg-opacity-50">
            <h1 className="mt-10 font-poppins font-medium text-[10vw] md:text-7xl text-white opacity-50">Contact Me</h1>
            <h1 className="font-poppins font-light text-[1rem] text-white opacity-70 mb-7">I’d love to hear from you. Here’s how you can get in touch with me:</h1>
            <div className='mb-10 justify-between flex flex-row bg-black'>
            <div className='mx-10'>
            <div className='flex flex-row my-2'>
                <CiMail style={logoStyle} />
                <a
                className='text-white mx-2 font-poppins md:mt-0 mt-1     text-[2vw] md:text-[1rem] opacity-70 hover:text-[#FC7E00] hover:opacity-100'
                href='mailto:gerry.bimaputra@gmail.com'
                >gerry.bimaputra@gmail.com</a>
            </div>
            <div className='flex flex-row my-2'>
                <FaLinkedin style={logoStyle} />
                <a
                className='text-white mx-2 font-poppins text-[1rem] opacity-70 hover:text-[#FC7E00] hover:opacity-100'
                href='https://www.linkedin.com/in/gerry-bima-putra-16a03a324/'
                >LinkedIn</a>
            </div>
            <div className='flex flex-row my-2'>
                <FaGithub style={logoStyle} />
                <a
                className='text-white mx-2 font-poppins text-[1rem] opacity-70 hover:text-[#FC7E00] hover:opacity-100'
                href='https://github.com/Gerrybp12'
                >GitHub</a>
            </div>
            </div>
            <div className='mx-10'>
            <div className='flex flex-row my-2'>
                <FaInstagram style={logoStyle} />
                <a
                className='text-white mx-2 font-poppins text-[1rem] opacity-70 hover:text-[#FC7E00] hover:opacity-100'
                href='https://www.instagram.com/gerry.bp/'
                >Instagram</a>
            </div>
            <div className='flex flex-row my-2'>
                <FaLine style={logoStyle} />
                <a
                className='text-white mx-2 font-poppins text-[1rem] opacity-70 hover:text-[#FC7E00] hover:opacity-100'
                href=''
                >gerrybp12</a>
            </div>
            <div className='flex flex-row my-2'>
                <FaDiscord style={logoStyle} />
                <a
                className='text-white mx-2 font-poppins text-[1rem] opacity-70 hover:text-[#FC7E00] hover:opacity-100'
                href=''
                >GerrYy</a>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Footer;