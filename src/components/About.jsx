import React, { useEffect, memo} from "react";
import { FileText } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2 
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]" 
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        About Me
      </h2>
    </div>
    <p 
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div
  className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)]"
  data-aos="fade-up"
  data-aos-duration="1000"
>
  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower opacity-25" />
  <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
  <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />

  <div className="relative w-full h-full">
    <div className="absolute inset-0 border-4 border-white/20 rounded-full transition-all duration-700 group-hover:border-white/40" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 rounded-full transition-opacity duration-700 hidden sm:block group-hover:opacity-0" />
    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-blue-500/20 rounded-full transition-opacity duration-700 hidden sm:block opacity-0 group-hover:opacity-100" />
    <img
      src="/me.jpg"
      alt="Profile"
      className="
      w-full h-full object-cover
      filter brightness-80 transition-all duration-700
      group-hover:brightness-100 group-hover:scale-110 group-hover:rotate-2
    "
      loading="lazy"
    />
  </div>
</div>

    </div>
  </div>
));


const AboutPage = () => {
  

  useEffect(() => {
    const initAOS = () => {
      AOS.init({ once: false });
    };
    initAOS();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  
  return (
    <section className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0" id="About">
      <Header />
      
      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" data-aos="fade-right">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Hello, I'm
              </span>
              <span className="block mt-2 text-gray-200">Toni Deori</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0" data-aos="fade-right" data-aos-duration="1500">
            A passionate Computer Science graduate skilled in programming with C, C++, Python, and basic Java. I have experience in web development and have built projects such as a browser extension for web accessibility and a prototype CCTV-based accident detection system using computer vision. Eager to leverage my problem-solving skills and hands-on project experience to contribute to innovative solutions and continue growing as a developer.</p>

            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-4">
              <a href="https://github.com/Toni-deori" target="_blank" rel="noreferrer">
                <button className="sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg">
                  <FileText className="w-5 h-5" /> View GitHub
                </button>
              </a>
             
            </div>
          </div>

          <ProfileImage />
        </div>

      </div>
    </section>
  );
};

export default memo(AboutPage);
