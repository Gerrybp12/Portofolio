"use client";
import React from 'react';

const Welcome = () => {
    const scrollToNextPage = () => {
        const nextSection = document.getElementById('next-section');
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <div className="relative flex min-h-[100svh] w-full justify-center overflow-hidden px-4 sm:px-6">
            <div className='relative min-h-[100svh] w-full max-w-[90rem] opacity-30 min-[1200px]:-left-[20rem] min-[1200px]:-top-0'>
                <img className="h-full w-full object-cover object-center" src="./fotodepan.png" alt="Gerry" />
            </div>
            <div className="absolute left-4 right-4 top-[20%] flex flex-col sm:left-[10%] sm:right-auto sm:w-[80%] min-[1200px]:left-[30%] min-[1550px]:left-[50%] min-[1200px]:top-[17rem] min-[1200px]:w-auto">
                <div className="">
                    <h1 className="font-poppins text-6xl font-bold italic leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#FFE767] to-[#B29393] sm:text-8xl min-[1200px]:text-9xl">
                        WELCOME
                    </h1>
                </div>
                <div className="absolute left-[14%] top-12 w-max max-w-[90%] sm:left-[20%] sm:top-16 min-[1200px]:left-[8rem] min-[1200px]:top-[5rem] min-[1200px]:w-auto">
                    <h1 className="m-0 whitespace-nowrap p-0 font-poppins text-4xl font-medium italic text-[#B8B4A0] sm:text-6xl min-[1200px]:text-8xl">
                        to my world
                    </h1>
                </div>
                <div className="mt-16 max-w-[75rem] sm:mt-24 min-[1200px]:mt-[5rem] min-[1200px]:max-w-[47rem]">
                    <hr />
                    <br />
                    <p className="font-poppins text-lg font-thin italic leading-relaxed text-white opacity-65 sm:text-3xl">
                        Welcome to my portfolio! in this website you will see my journey, and what I have done.
                    </p>
                </div>
                <br />
                <div className="flex max-w-[75rem] justify-center sm:justify-end min-[1200px]:max-w-[47rem]">
                    <div className="group flex bg-black w-[10rem] h-[3.5rem] justify-center pt-2 rounded-3xl text-white p-0 cursor-pointer select-none transition duration-500 ease-in-out hover:text-[#330404]
                     hover:bg-[#E4937A] hover:shadow-[0_0_40px_10px_rgba(255,202,185,0.3)]"
                     onClick={scrollToNextPage}>
                        <span className="overflow-hidden block transition-opacity duration-500 ease-in-out group-hover:w-0 group-hover:h-0 group-hover:opacity-0 left-[10rem] text-3xl font-normal italic opacity-50">Continue</span>
                        <span className="overflow-hidden block transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-100 group-hover:w-auto group-hover:h-auto w-0 h-0 text-3xl">↓</span>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  export default Welcome;
