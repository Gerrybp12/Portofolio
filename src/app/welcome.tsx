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
        <div className="justify-center flex max-h-[100%]">
            <div className='relative min-[1200px]:w-[90rem] min-w-[70rem] min-[1200px]:-left-[20rem] min-[1200px]:-top-0 opacity-30'>
                <img className="object-fill" src="./fotodepan.png" alt="Gerry" />
            </div>
            <div className="absolute flex-col min-[1200px]:left-[30%] min-[1550px]:left-[50%] left-[10%] top-[25%] min-[1200px]:top-[17rem] w-[80%] min-[1200px]:w-auto">
                <div className="">
                    <h1 className="font-poppins italic font-bold min-[1200px]:text-9xl text-[14vw] bg-clip-text text-transparent bg-gradient-to-r from-[#FFE767] to-[#B29393]">
                        WELCOME
                    </h1>
                </div>
                <div className="absolute min-[1200px]:left-[8rem] min-[1200px]:top-[5rem] top-[10vw] left-[20%] w-[70vw] min-[1200px]:w-auto ">
                    <h1 className="font-poppins italic font-medium text-[#B8B4A0] min-[1200px]:text-8xl text-[10vw] p-0 m-0">
                        to my world
                    </h1>
                </div>
                <div className="min-[1200px]:mt-[5rem] mt-[5%] max-w-[75rem] min-[1200px]:max-w-[47rem]">
                    <hr />
                    <br />
                    <p className="font-poppins italic font-thin text-3xl opacity-65 text-white">
                        Welcome to my portfolio! in this website you will see my journey, and what I have done.
                    </p>
                </div>
                <br />
                <div className="flex justify-center max-w-[75rem] min-[1200px]:max-w-[47rem] min-[830px]:justify-end">
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