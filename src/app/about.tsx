'use client'
import { TbWorldWww } from "react-icons/tb";
import { SiCplusplus, SiPython, SiTypescript } from "react-icons/si";
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

    const memoraGithubUrl = "https://github.com/HeraldoArman/memora";

    const academicTimeline = [
        {
          title: "MIN 09 Petukangan Selatan",
          years: "2012 - 2018",
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
        <><div id="next-section" className="flex w-full justify-center overflow-hidden rounded-t-[1.5rem] bg-black bg-gradient-to-br from-[#252525] to-[#200C0C] shadow-[0_0_50px_10px_rgba(0,0,0,1)] sm:rounded-t-[3rem]">
            <div className="mt-20 min-h-0 w-full max-w-[80rem] px-4 sm:mt-[10rem] sm:px-6 lg:px-0">
                <h1 className="font-poppins text-4xl font-bold italic leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FFE767] to-[#B29393] sm:text-7xl">Gerry Bima Putra</h1>
                <p className="mt-5 text-left font-poppins text-lg font-light italic leading-relaxed text-white opacity-60 sm:text-2xl sm:text-justify">Aspiring Full-Stack Developer | Passionate about Front-End and Back-End Development <br></br>
                    <br></br>Welcome to my portfolio! I’m a dedicated student at the University of Indonesia, embarking on an exciting journey in tech.
                    With a passion for both front-end and back-end development, I’m eager to collaborate on meaningful projects and contribute
                    to the ever-evolving world of web development.
                </p>
                <div className="mt-20 text-center sm:mt-[10rem]">
                    <h1 className="mb-10 font-poppins text-3xl font-normal italic text-[#B8B4A0] sm:mb-[5rem] sm:text-5xl">Academic Background</h1>
                    <div className="mx-auto w-full max-w-4xl">
                        {/* Render academic timeline */}
                        {academicTimeline.map((item, index) => (
                            <div
                                key={index}
                                /* Render academic timeline */
                                className="mt-6 flex flex-col items-center gap-4 rounded-xl bg-black bg-opacity-25 p-4 sm:mt-10 sm:flex-row"
                            >
                                <div className="w-full min-w-0 flex-grow text-center sm:text-left">
                                    <h4 className="break-words font-poppins text-2xl font-medium italic text-white opacity-70 sm:text-3xl">{item.title}</h4>
                                    {item.school && (
                                        <p className="font-poppins text-lg font-light italic text-white opacity-50 sm:text-xl">{item.school}</p>
                                    )}
                                    {item.major && <p className="font-poppins text-lg font-light italic text-white opacity-50 sm:text-xl">{item.major}</p>}
                                    <p className="mt-5 font-poppins text-base font-light italic text-white opacity-40 sm:mt-8">{item.years}</p>
                                    {item.web !== "" && (
                                        <button
                                            className="mx-auto mt-2 flex items-center rounded-lg p-1 font-poppins text-xl font-light italic text-white opacity-60 transition duration-300 ease-in-out hover:text-[#D27101] hover:shadow-[0_0_100px_15px_rgba(210,113,1,0.5)] sm:mx-0 sm:text-2xl"
                                            onClick={() => window.open(item.web, "_blank")}
                                        >
                                            <TbWorldWww className="mr-2" />
                                            <span>Website</span>
                                        </button>
                                    )}
                                </div>
                                <div className="shrink-0 sm:ml-4">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="h-32 w-32 rounded-full object-cover opacity-70 shadow-[0_0_100px_15px_rgba(210,113,1,0.5)] sm:h-40 sm:w-40" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
            <div className="flex w-full justify-center px-4 sm:px-6">
                <div className="mt-20 min-h-0 w-full max-w-[85rem] text-center sm:mt-[10rem] sm:min-h-[100rem]">
                    <h1 className="p-4 font-poppins text-4xl font-bold italic bg-clip-text text-transparent bg-gradient-to-r from-[#FFE767] to-[#B29393] sm:p-10 sm:text-7xl">Projects</h1>
                    <Carousel responsive={responsive} showDots={true}>
                    <div
                     style={{ backgroundImage: 'url("/tenaga.jpg")' }}
                     className="flex h-screen min-h-[32rem] max-h-[60rem] items-center justify-center rounded-[1.5rem] bg-cover bg-center sm:rounded-[3rem]">
                        <div>
                            <h1 className="font-poppins text-6xl font-extrabold leading-none text-white sm:text-9xl">
                                Tenaga
                            </h1>
                            <div className="mt-3 flex flex-wrap items-center justify-center gap-4 min-[550px]:justify-between">
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
                    className="h-screen min-h-[32rem] max-h-[60rem] rounded-[1.5rem] bg-cover bg-center sm:rounded-[3rem]">
                    </div>
                    <div
                    style={{ backgroundImage: 'url("/gorilla.jpg")' }}
                    className="flex h-screen min-h-[32rem] max-h-[60rem] items-center justify-center rounded-[1.5rem] bg-cover bg-center sm:rounded-[3rem]">
                        <div>
                            <h1 className="font-poppins text-6xl font-extrabold leading-none text-white sm:text-9xl">
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
                     className="flex h-screen min-h-[32rem] max-h-[60rem] items-center justify-center rounded-[1.5rem] bg-cover bg-center sm:rounded-[3rem]">
                        <div>
                            <h1 className="font-poppins text-6xl font-extrabold leading-none text-white sm:text-9xl">
                                Slime
                            </h1>
                            <div className="flex flex-wrap items-center justify-center gap-4 min-[550px]:justify-between">
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
                    className="h-screen min-h-[32rem] max-h-[60rem] rounded-[1.5rem] bg-cover bg-center sm:rounded-[3rem]">
                    </div>
                    <div
                    style={{ backgroundImage: 'url("/gorilla.jpg")' }}
                    className="flex h-screen min-h-[32rem] max-h-[60rem] items-center justify-center rounded-[1.5rem] bg-cover bg-center sm:rounded-[3rem]">
                        <div>
                            <h1 className="font-poppins text-6xl font-extrabold leading-none text-white sm:text-9xl">
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
                     className="flex h-screen min-h-[32rem] max-h-[60rem] items-center justify-center rounded-[1.5rem] bg-cover bg-center sm:rounded-[3rem]">
                        <div>
                            <h1 className="font-poppins text-5xl font-extrabold leading-none text-white sm:text-9xl">
                                Portofolio
                            </h1>
                            <div className="flex flex-wrap items-center justify-center gap-4 min-[550px]:justify-between">
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
                    className="flex h-screen min-h-[32rem] max-h-[60rem] items-center justify-center rounded-[1.5rem] bg-cover bg-center sm:rounded-[3rem]">
                        <div>
                            <h1 className="font-poppins text-6xl font-extrabold leading-none text-white sm:text-9xl">
                                Gerry
                            </h1>
                        </div>
                    </div>
                    </Carousel>
                    <br />
                    <br />
                    <br />
                    <Carousel responsive={responsive} showDots={true}>
                    <div
                     className="relative flex h-screen min-h-[32rem] max-h-[60rem] items-center justify-center overflow-hidden rounded-[1.5rem] bg-cover bg-center sm:rounded-[3rem]">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-[url('/produk.png')] bg-cover bg-center grayscale brightness-[0.38]"
                        />
                        <div className="relative z-10">
                            <h1 className="font-poppins text-6xl font-extrabold leading-none text-white sm:text-9xl">
                                memora
                            </h1>
                            <div className="mt-3 flex flex-wrap items-center justify-center gap-4 min-[550px]:justify-between">
                            <button
                            aria-label="Open the Memora GitHub repository"
                            className="hover:bg-[#FC7E00] hover:shadow-[0_0_100px_15px_rgba(210,113,1,0.5)] transition duration-500 ease-in-out bg-black bg-opacity-40 rounded-xl item-center justify-center min-w-[6.5rem] flex flex-row"
                            onClick={() => window.open(memoraGithubUrl, "_blank", "noopener,noreferrer")}>
                                <h1 className="mt-1 font-poppins text-white">Github</h1>
                                <img className="w-[1.5rem] mt-1 ml-1" src="./github.png" alt="Github" />
                            </button>
                            <div className="flex flex-row items-center ml-4 gap-2 text-white">
                                <SiPython className="w-[2rem] h-[2rem]" title="Python" />
                                <SiCplusplus className="w-[2rem] h-[2rem]" title="C++" />
                                <SiTypescript className="w-[2rem] h-[2rem]" title="TypeScript" />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div
                    style={{ backgroundImage: 'url("/produk.png")' }}
                    className="h-screen min-h-[32rem] max-h-[60rem] rounded-[1.5rem] bg-cover bg-center sm:rounded-[3rem]">
                    </div>
                    <div
                    className="relative flex h-screen min-h-[32rem] max-h-[60rem] items-center justify-center overflow-hidden rounded-[1.5rem] bg-cover bg-center sm:rounded-[3rem]">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-[url('/tim.jpeg')] bg-cover bg-center grayscale brightness-[0.35]"
                        />
                        <div className="relative z-10 text-center px-6">
                            <h1 className="mx-auto max-w-[90%] font-poppins text-4xl font-extrabold leading-tight text-white sm:text-6xl min-[700px]:text-8xl">
                                PPL StartUp Early Access
                            </h1>
                            <h1 className="font-poppins font-light text-white text-xl mt-3">
                                Gerry - Rifqi- Aldo
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
