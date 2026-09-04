import Welcome from './welcome'
import About from "./about";
import Footer from "./footer";
import LoadingScreen from './loading-screen';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className='min-h-screen w-full overflow-x-hidden bg-gradient-to-r from-[#252525] to-[#200C0C]'>
      <Welcome></Welcome>
      <About></About>
      <Footer></Footer>
      </div>
    </>
  );
}
