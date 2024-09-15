'use client'
import { TbWorldWww } from "react-icons/tb";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const About = () => {

    const academicTimeline = [
        {
          title: "MIN 09 Petukangan Selatan",
          years: "2015 - 2018",
          imageUrl: "./min_09.jpg",
          web: "",
        },
        {
          title: "SMP - SMA Cahaya Rancamaya",
          school: "Science Major",
          years: "2018-2024",
          imageUrl: "./cahaya_rancamaya.jpg" ,
          web: "https://scr.sch.id/",
        },
        {
          title: "Universitas Indonesia",
          school: "Faculty of Computer Science",
          major: "Computer Science Major",
          years: "Ongoing",
          imageUrl: "./universitas_indonesia.jpg",
          web: "https://www.ui.ac.id/",
        },
      ];

    return(
        <><div id="next-section" className="flex justify-center rounded-tr-[3rem] rounded-tl-[3rem] bg-black bg-gradient-to-br from-[#252525] to-[#200C0C] overflow-hidden shadow-[0_0_50px_10px_rgba(0,0,0,1)]">
            <div className="w-[80rem] mt-[10rem] mx-[4rem] min-h-[85rem]">
                <h1 className="font-poppins italic font-bold text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFE767] to-[#B29393]">Gerry Bima Putra</h1>
                <p className=" mt-5 text-justify font-poppins italic font-light text-2xl opacity-60 text-white">Aspiring Full-Stack Developer | Passionate about Front-End and Back-End Development <br></br>
                    <br></br>Welcome to my portfolio! I’m a dedicated student at the University of Indonesia, embarking on an exciting journey in tech.
                    With a passion for both front-end and back-end development, I’m eager to collaborate on meaningful projects and contribute
                    to the ever-evolving world of web development.
                </p>
                <div className="mt-[10rem] text-center">
                    <h1 className="font-poppins italic font-normal text-5xl text-[#B8B4A0] mb-[5rem]">Academic Background</h1>
                    <div className="max-w-4xl mx-auto">
                        {/* Render academic timeline */}
                        {academicTimeline.map((item, index) => (
                            <div
                                key={index}
                                /* Render academic timeline */
                                className="bg-black bg-opacity-25 p-4 rounded-xl flex items-center mt-10"
                            >
                                <div className="flex-grow">
                                    <h4 className="font-poppins italic font-medium text-3xl opacity-70 text-white">{item.title}</h4>
                                    {item.school && (
                                        <p className="font-poppins italic font-light text-xl opacity-50 text-white">{item.school}</p>
                                    )}
                                    {item.major && <p className="font-poppins italic font-light text-xl opacity-50 text-white">{item.major}</p>}
                                    <p className="font-poppins italic font-light text-[1rem ] opacity-40 text-white mt-8">{item.years}</p>
                                    {item.web !== "" && (
                                        <button
                                            className="hover:text-[#D27101] hover:shadow-[0_0_100px_15px_rgba(210,113,1,0.5)] rounded-lg p-1 transition duration-300 ease-in-out mt-2 flex items-center font-poppins italic font-light text-2xl opacity-60 text-white"
                                            onClick={() => window.open(item.web, "_blank")}
                                        >
                                            <TbWorldWww className="mr-2" />
                                            <span>Website</span>
                                        </button>
                                    )}
                                </div>
                                <div className="ml-4">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-[10rem] h-[10rem] rounded-full opacity-70 shadow-[0_0_100px_15px_rgba(210,113,1,0.5)] object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
            <div className="flex justify-center">
                <div className="mt-[10rem] text-center 500 max-w-[85rem] min-h-[100rem]">
                    <h1 className="p-10 font-poppins italic font-bold text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFE767] to-[#B29393]">Projects</h1>
                    <Carousel responsive={responsive} showDots={true}>
                    <div
                     style={{ backgroundImage: 'url("/tenaga.jpg")' }}
                     className="flex bg-cover bg-center h-screen rounded-[3rem] justify-center items-center ">
                        <div>
                            <h1 className="font-poppins font-extrabold min-[600px]:text-9xl text-[20vw] text-white">
                                Tenaga
                            </h1>
                            <div className="flex flex-row min-[550px]:justify-between justify-center mt-3">
                            <button
                            className="hover:bg-[#FC7E00] hover:shadow-[0_0_100px_15px_rgba(210,113,1,0.5)] transition duration-500 ease-in-out bg-black bg-opacity-40 rounded-xl item-center justify-center min-w-[6.5rem] flex flex-row "
                            onClick={() => window.open("https://github.com/Gerrybp12/Tenaga-App", "_blank")}>
                                <h1 className="mt-1 font-poppins text-white">Github</h1>
                                <img className="w-[1.5rem] mt-1 ml-1" src="./github.png" alt="Github" />
                            </button>
                            <div className="flex flex-row">
                            <img className="w-[2rem]" src="./dart.png" alt="Dart" />
                            <img className="w-[2rem]" src="./flutter.png" alt="Flutter" />
                            <img className="w-[2rem]" src="./firebase.png" alt="Firebase" />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div
                    style={{ backgroundImage: 'url("/tenaga_brosur.jpg")' }}
                    className=" bg-cover bg-center h-screen rounded-[3rem]">
                    </div>
                    <div
                    style={{ backgroundImage: 'url("/gorilla.jpg")' }}
                    className="flex bg-cover bg-center h-screen rounded-[3rem] justify-center items-center">
                        <div>
                            <h1 className="font-poppins font-extrabold min-[600px]:text-9xl text-[20vw] text-white">
                                Gorilla
                            </h1>
                            <h1 className="font-poppins font-light text-white text-xl">
                                Gerry - Ghazi
                            </h1>
                        </div>
                    </div>
                    </Carousel>
                    <br />
                    <br />
                    <br />
                    <Carousel responsive={responsive} showDots={true}>
                    <div
                     style={{ backgroundImage: 'url("/slime.jpg")' }}
                     className="flex bg-cover bg-center h-screen rounded-[3rem] justify-center items-center">
                        <div>
                            <h1 className="font-poppins font-extrabold min-[600px]:text-9xl text-[20vw] text-white">
                                Slime
                            </h1>
                            <div className="flex flex-row min-[550px]:justify-between justify-center">
                            <button
                            className="hover:bg-[#FC7E00] hover:shadow-[0_0_100px_15px_rgba(210,113,1,0.5)] transition duration-500 ease-in-out bg-black bg-opacity-40 rounded-xl item-center justify-center min-w-[6.5rem] flex flex-row "
                            onClick={() => window.open("https://github.com/Gerrybp12/Slime", "_blank")}>
                                <h1 className="mt-1 font-poppins text-white">Github</h1>
                                <img className="w-[1.5rem] mt-1 ml-1" src="./github.png" alt="Github" />
                            </button>
                            <div className="flex flex-row">
                            <img className="w-[2rem]" src="./cpp.png" alt="Flutter" />
                            <img className="w-[2rem]" src="./arduino.png" alt="Firebase" />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div
                    style={{ backgroundImage: 'url("/slime_poster.jpg")' }}
                    className=" bg-cover bg-center h-screen rounded-[3rem]">
                    </div>
                    <div
                    style={{ backgroundImage: 'url("/gorilla.jpg")' }}
                    className="flex bg-cover bg-center h-screen rounded-[3rem] justify-center items-center">
                        <div>
                            <h1 className="font-poppins font-extrabold min-[600px]:text-9xl text-[20vw] text-white">
                                Gorilla
                            </h1>
                            <h1 className="font-poppins font-light text-white text-xl">
                                Gerry - Ghazi
                            </h1>
                        </div>
                    </div>
                    </Carousel>
                    <br />
                    <br />
                    <br />
                    <Carousel responsive={responsive} showDots={true}>
                    <div
                     style={{ backgroundImage: 'url("/portofolio.jpg")' }}
                     className="flex bg-cover bg-center h-screen rounded-[3rem] justify-center items-center">
                        <div>
                            <h1 className="font-poppins font-extrabold min-[700px]:text-9xl text-[15vw] text-white">
                                Portofolio
                            </h1>
                            <div className="flex flex-row min-[550px]:justify-between justify-center">
                            <button
                            className="hover:bg-[#FC7E00] hover:shadow-[0_0_100px_15px_rgba(210,113,1,0.5)] transition duration-500 ease-in-out bg-black bg-opacity-40 rounded-xl item-center justify-center min-w-[6.5rem] flex flex-row "
                            onClick={() => window.open("https://github.com/Gerrybp12/Portofolio", "_blank")}>
                                <h1 className="mt-1 font-poppins text-white">Github</h1>
                                <img className="w-[1.5rem] mt-1 ml-1" src="./github.png" alt="Github" />
                            </button>
                            <div className="flex flex-row">
                            <img className="w-[2rem] mx-2" src="./typescript.png" alt="Flutter" />
                            <img className="w-[2rem]" src="./react.png" alt="Firebase" />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div
                    style={{ backgroundImage: 'url("/gerry.jpg")' }}
                    className="flex bg-cover bg-center h-screen rounded-[3rem] justify-center items-center">
                        <div>
                            <h1 className="font-poppins font-extrabold min-[600px]:text-9xl text-[20vw] text-white">
                                Gerry
                            </h1>
                        </div>
                    </div>
                    </Carousel>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
        </div></>
    );
}

export default About;