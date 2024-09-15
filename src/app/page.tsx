import Welcome from './welcome'
import About from "./about";
import Footer from "./footer";

export default function Home() {
  return (
    <div className='min-h-screen min-w-screen overflow-hidden bg-gradient-to-r from-[#252525] to-[#200C0C] overflow-hidden"'>
      <Welcome></Welcome>
      <About></About>
      <Footer></Footer>
    </div>
  );
}
